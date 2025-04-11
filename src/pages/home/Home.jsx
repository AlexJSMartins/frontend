import { useState, useEffect } from 'react';
import { getRanking } from '../../services/api';
import Charts from '../../components/Charts';
import './style.css';

export default function Home() {
  const [ranking, setRanking] = useState([]);
  const [tipo, setTipo] = useState('nome do empregado');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState(2024);
  const [destaques, setDestaques] = useState([]);

  const tipos = [
    'nome do empregado',
    'nome do produto',
    'cidade do ponto de venda',
    'nome do ponto de venda',
  ];

  const meses = [
    { label: 'Todos', value: '' },
    { label: 'Janeiro', value: 1 },
    { label: 'Fevereiro', value: 2 },
    { label: 'Março', value: 3 },
    { label: 'Abril', value: 4 },
    { label: 'Maio', value: 5 },
    { label: 'Junho', value: 6 },
    { label: 'Julho', value: 7 },
    { label: 'Agosto', value: 8 },
    { label: 'Setembro', value: 9 },
    { label: 'Outubro', value: 10 },
    { label: 'Novembro', value: 11 },
    { label: 'Dezembro', value: 12 },
  ];

  const anos = [2023, 2024, 2025];

  const buscarRanking = async () => {
    const filtros = { tipo, mes, ano };
    const chaveCache = JSON.stringify(filtros);
    const cache = localStorage.getItem('rankingCache');
    const cacheObj = cache ? JSON.parse(cache) : {};

    if (cacheObj[chaveCache]) {
      setRanking(cacheObj[chaveCache]);
    } else {
      const data = await getRanking(filtros);
      const resultado = data.ranking || [];
      cacheObj[chaveCache] = resultado;
      localStorage.setItem('rankingCache', JSON.stringify(cacheObj));
      setRanking(resultado);
    }
  };

  useEffect(() => {
    if (ranking.length > 0) {
      const top3 = ranking.slice(0, 3);
      const total = ranking.reduce((acc, cur) => {
        const vendas = Object.values(cur).find((v) => typeof v === 'number') || 0;
        return acc + vendas;
      }, 0);
      setDestaques([...top3, { total }]);
    }
  }, [ranking]);

  const getTituloTipo = (tipo) => {
    const map = {
      'nome do empregado': 'vendedores',
      'nome do produto': 'produtos',
      'cidade do ponto de venda': 'cidades',
      'nome do ponto de venda': 'lojas',
    };
    return map[tipo] || 'itens';
  };

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li>Dashboard</li>
          <li>Relatórios</li>
          <li>Configurações</li>
        </ul>
      </aside>

      <main className="mainContent">
        <h1 className="title">Dashboard de Vendas</h1>

        <div className="filtrosContainer">
          <select value={tipo} onChange={(e) => setTipo(e.target.value)} className="select">
            {tipos.map((t, i) => <option key={i} value={t}>{t}</option>)}
          </select>

          <select value={mes} onChange={(e) => setMes(e.target.value)} className="select">
            {meses.map((m, i) => <option key={i} value={m.value}>{m.label}</option>)}
          </select>

          <select value={ano} onChange={(e) => setAno(Number(e.target.value))} className="select">
            {anos.map((a, i) => <option key={i} value={a}>{a}</option>)}
          </select>

          <button onClick={buscarRanking} className="button">Buscar</button>
        </div>

        <section className="cardsContainer">
          <h3>Top três melhores {getTituloTipo(tipo)}</h3>
          <div className="destaques">
            {destaques.map((item, i) => (
              <div key={i} className="destaqueCard">
                {item.total !== undefined ? (
                  <>
                    <div className="metricTitle">Total</div>
                    <div className="metricValue">{item.total}</div>
                  </>
                ) : (
                  Object.entries(item).map(([k, v]) => (
                    <div key={k}>
                      <div className="metricTitle">{k}</div>
                      <div className="metricValue">{v}</div>
                    </div>
                  ))
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="chartsContainer">
          {ranking.length > 0 && <Charts data={ranking} tipo={tipo} />}
        </section>
      </main>
    </div>
  );
}
