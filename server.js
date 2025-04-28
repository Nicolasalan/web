const express = require('express');
const path = require('path');
const app = express();
const port = 80;

// Servir arquivos estáticos (HTML, CSS, JS, imagens)
app.use(express.static(path.join(__dirname)));

// Rota raiz redireciona para index.html
app.get('/', (req, res) => {
  res.redirect('/index.html');
});

// Iniciar servidor
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log(`Acessível na rede local pelo IP desta máquina`);
  console.log(`Páginas disponíveis:`);
  console.log(`- Home: http://<seu-ip>/index.html`);
  console.log(`- Projetos: http://<seu-ip>/projects.html`);
  console.log(`- Animação: http://<seu-ip>/Animation.html`);
  console.log(`- Canvas: http://<seu-ip>/Canvas.html`);
  console.log(`- Adivinhação: http://<seu-ip>/guess.html`);
});

// Tratar erros 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Tratar outros erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Ocorreu um erro no servidor!');
});

