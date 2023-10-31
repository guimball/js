// Arquivo app.js

const express = require('express');
const routes = require('./routes'); // Importa o módulo de rotas

const app = express();

app.use(routes); // Adiciona as rotas no app

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
