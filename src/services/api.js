const API_URL = 'http://127.0.0.1:8000/api/ranking';

export async function getRanking({ tipo = '', mes = '', ano = '' } = {}) {
  const params = new URLSearchParams();

  if (tipo) params.append('tipo', tipo);
  if (mes) params.append('mes', mes);
  if (ano) params.append('ano', ano);

  const url = `${API_URL}?${params.toString()}`;
  
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.error) {
      throw new Error(data.error);
    }

    return data;
  } catch (error) {
    console.error('Erro ao buscar ranking:', error.message);
    return { sucesso: false, ranking: [], error: error.message };
  }
}
