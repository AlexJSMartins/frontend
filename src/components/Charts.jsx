import React from 'react';
import {
  BarChart, Bar, PieChart, Pie, Cell,
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

// Cores para o gráfico de pizza
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#845EC2', '#D65DB1'];

export default function Charts({ data, tipo }) {
  // Extrai o nome da chave principal dinamicamente
  const chave = data.length > 0 ? Object.keys(data[0])[0] : 'Nome';
  const valor = data.length > 0 ? Object.keys(data[0])[1] : 'vendas';

  return (
    <section className="chartsContainer">
      {/* Gráfico de Barras */}
      <div className="chartCard">
        <h3>Gráfico de Barras</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey={chave} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={valor} fill="#0088FE" onClick={(data) => onSelectItem(data[chave])}/>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico de Pizza - Top 5 */}
      <div className="chartCard">
        <h3>Top 5 - Gráfico de Pizza</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data.slice(0, 5)}  // Top 5
              dataKey={valor}
              nameKey={chave}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
              onClick={(data, index) => onSelectItem(data.payload[chave])}
            >
              {data.slice(0, 5).map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="middle" align="right" layout="vertical" />
          </PieChart>
        </ResponsiveContainer>
      </div>


      {/* Tabela de Ranking Completo */}
      <div className="chartCard" style={{ flex: '1 1 100%' }}>
        <h3>Ranking Completo</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '10px', background: '#f0f0f0' }}>{chave}</th>
                <th style={{ textAlign: 'left', padding: '10px', background: '#f0f0f0' }}>{valor}</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #ddd' }} onClick={() => onSelectItem(item[chave])}>
                  <td style={{ padding: '10px' }}>{item[chave]}</td>
                  <td style={{ padding: '10px' }}>{item[valor]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}
