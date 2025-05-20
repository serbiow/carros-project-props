# 🚗 Projeto Car Details - React + Vite

Este é um projeto simples em React criado com Vite. Ele exibe uma lista de carros com seus detalhes utilizando **componentes**, **props** e **condicionais**.

## 🛠 Tecnologias Utilizadas

- React.js
- Vite
- JavaScript (ES6)
- Node.js (ambiente para execução)
- HTML/CSS

## 📦 Instalação

1. Clone o repositório ou baixe os arquivos:
```bash
git clone https://github.com/serbiow/carros-project-props.git
cd carros-project-props
```

2. Instale as dependências:
```bash
npm install
```

3. Rode o projeto:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

## 📁 Estrutura de Arquivos

```
src/
├── components/
│   └── CarDetails.jsx   # Componente que exibe os detalhes do carro
├── App.jsx              # Componente principal que mapeia os carros
└── main.jsx             # Ponto de entrada da aplicação
```

## 🚘 Funcionalidades

- Exibe marca, quilometragem, cor e ano do carro.
- Mostra automaticamente se o carro é **novo** (km < 1000) ou **usado**.

## 📄 Licença

Este projeto é livre para fins educacionais.
