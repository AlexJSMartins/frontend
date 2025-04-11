
# 📊 Dashboard de Vendas — React + Vite + Django

Este projeto é um dashboard interativo desenvolvido em **React + Vite**, que consome uma **API construída com Django** voltada para análise de vendas. Por enquanto, a aplicação está consumindo apenas a rota de **ranking geral**, mas já está preparada para integração com outras análises específicas.

## 🚀 Tecnologias utilizadas

### Frontend
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Recharts](https://recharts.org/) — gráficos interativos
- CSS moderno (estilização própria)

### Backend (API)
- [Python](https://www.python.org/)
- [Django](https://www.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)

---

## 🖥️ Funcionalidades atuais

- Filtros por:
  - Tipo de agrupamento (empregado, produto, cidade, loja)
  - Mês
  - Ano
- Gráficos:
  - Gráfico de Barras
  - Gráfico de Pizza (Top 5)
  - Tabela completa com ranking
- Interatividade:
- Cards com destaque para os **Top 3** e o total de vendas

---

## 🔌 Endpoints da API

A aplicação será integrada com os seguintes endpoints:

| Rota                         | Descrição                                    |
|-----------------------------|-----------------------------------------------|
| `/ranking`                  | Ranking geral (já implementado)               |
| `/melhor`                   | Retorna o melhor item por tipo de filtro      |
| `/melhor-por-categoria`     | Melhor por categoria                          |
| `/analise-por-empregado`    | Análise detalhada por empregado               |
| `/analise-por-cidade`       | Análise detalhada por cidade                  |
| `/analise-por-bandeira`     | Análise detalhada por bandeira                |
| `/melhor-cidade-ou-bandeira`| Melhor cidade ou bandeira                     |
| `/ranking-cidade-ou-bandeira`| Ranking para cidade ou bandeira              |

---

## 🧭 Como rodar o projeto

### 1. Backend (Django)

🚀 Como Executar o Backend

🔧 Pré-requisitos

Antes de começar, você precisará ter instalado:

Python 3.9+

🖥 Passos para Rodar o Projeto

1️⃣ Clone o repositório:

git clone https://github.com/AlexJSMartins/API-PYTHON.git

cd dashboard_backend

2️⃣ Crie um ambiente virtual e ative:

python -m venv venv

source venv/bin/activate  # No Windows: venv\Scripts\activate

3️⃣ Instale as dependências:

pip install -r requirements.txt

4️⃣ Inicie o servidor Django:

python manage.py runserver

O backend estará rodando em: [http://127.0.0.1:8000](http://127.0.0.1:8000)

---

### 2. Frontend (React + Vite)

🖥 Passos para Rodar o Projeto

1️⃣ Clone o repositório:

git clone https://github.com/AlexJSMartins/frontend.git

```bash
# Acesse a pasta do frontend
cd frontend/

# Instale as dependências
npm install

# Rode a aplicação
npm run dev
```

O frontend estará acessível em: [http://localhost:5173](http://localhost:5173)

---

## 📁 Estrutura de pastas

```bash
frontend/
├── components/
│   └── Charts.jsx
├── pages/
│   └── home/
│       ├── Home.jsx
│       └── style.css
├── services/
│   └── api.js
├── main.jsx
└── App.jsx
```

---

## 💡 Próximos passos

- [ ] Integrar novos endpoints como análises por cidade, bandeira e produto
- [ ] Criar novas páginas para cada tipo de análise
- [ ] Adicionar autenticação de usuários
- [ ] Adicionar exportação de relatórios

---

## 🧠 Autor

Desenvolvido por **Alex Soares** 
🌐 LinkedIn: (https://www.linkedin.com/in/alexjsmartins)

📧 Email: alexsoares848@gmail.com

📱 (17) 99109-3927

---

Se gostou do projeto, deixe uma ⭐ no repositório! 🚀🔥