# Weather app

Este é um projeto de Weather app é uma aplicação web desenvolvida com React e TypeScript que fornece informações detalhadas sobre o clima das capitais dos estados brasileiros. O projeto consome a API do OpenWeatherMap para exibir dados como temperatura, sensação térmica, descrição do clima, vento, pressão e umidade. A aplicação permite selecionar múltiplas cidades e visualizar as informações meteorológicas em um layout moderno e responsivo.

## Funcionalidades

- Seleção da capital dos estados do Brasil.
- Exibição de informações detalhadas do clima para cada cidade.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript.
- **Sass**: Pré-processador CSS para estilização.
- **OpenWeatherMap API**: API para obter dados meteorológicos.
- **Axios**: Cliente HTTP para fazer requisições à API.

## Estrutura do Projeto

```plaintext
weather-app/
├── public/
├── src/
│   ├── components/
│   ├── styles/
│   ├── types/
|   ├── App.tsx
|   └── index.tsx
├── package.json
├── .env
└── README.md
```

- **public/:** Arquivos públicos, como o `index.html` e ícones.
- **src/components/:** Componentes React reutilizáveis, como o seletor de cidades e o cartão de clima.
- **src/styles/:** Arquivos de estilo SCSS, incluindo variáveis e animações.
- **src/types/:** Definições de tipos TypeScript para os dados da API.
- **src/App.tsx:** Componente principal da aplicação.
- **src/index.tsx:** Ponto de entrada da aplicação.
- **package.json:** Dependências e scripts do projeto.
- **.env:** Chave da API.
- **README.md:** Documentação do projeto.

## Instalação

1. **Clone o repositório:**

```sh
 git clone git clone https://github.com/SEU_USUARIO/weather-app.git
```

2. **Navegue para o diretório do projeto:**

```sh
 cd weather-app
```

3. **Instale as dependências:**

```sh
 npm install
```

4. **Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API do OpenWeatherMap (é preciso se cadastrar para obter uma chave):**

```sh
 REACT_APP_OPENWEATHERMAP_API_KEY=SUA_CHAVE_DE_API
```

5. **Inicie o servidor de desenvolvimento:**

```sh
 npm start
```

## Uso

Após a instalação e configuração, a aplicação permite que você selecione as capitais dos estados brasileiros usando um seletor de cidades. As informações meteorológicas para as cidades selecionadas serão exibidas em cartões com detalhes como temperatura, sensação térmica, descrição do clima, vento, pressão e umidade.
