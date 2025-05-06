const express = require("express");
const path = require("path");
const app = express();
const port = 80;

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.redirect("/index.html");
});

// Iniciar servidor
app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

// Tratar erros 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

// Tratar outros erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Ocorreu um erro no servidor!");
});
