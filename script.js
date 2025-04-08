document.addEventListener("DOMContentLoaded", function () {
  const canvas1 = document.getElementById("canvas1");
  const ctx1 = canvas1.getContext("2d");

  const canvas2 = document.getElementById("canvas2");
  const ctx2 = canvas2.getContext("2d");

  function desenharForma(ctx, x, y, tamanho, cor) {
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, tamanho, tamanho);
  }

  function desenharTraco(ctx, x1, y1, x2, y2, cor, espessura = 2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = cor;
    ctx.lineWidth = espessura;
    ctx.stroke();
  }

  function desenharCirculo(ctx, x, y, raio, cor, preenchido = true) {
    ctx.beginPath();
    ctx.arc(x, y, raio, 0, 2 * Math.PI);
    if (preenchido) {
      ctx.fillStyle = cor;
      ctx.fill();
    } else {
      ctx.strokeStyle = cor;
      ctx.stroke();
    }
  }

  function desenharArco(ctx, x, y, raio, inicio, fim, cor, preenchido = true) {
    ctx.beginPath();
    ctx.arc(x, y, raio, inicio * Math.PI, fim * Math.PI);
    if (preenchido) {
      ctx.fillStyle = cor;
      ctx.fill();
    } else {
      ctx.strokeStyle = cor;
      ctx.stroke();
    }
  }

  function adicionarTexto(ctx, texto, x, y, cor, tamanho) {
    ctx.font = `${tamanho}px Arial`;
    ctx.fillStyle = cor;
    ctx.fillText(texto, x, y);
  }

  function desenharTriangulo(ctx, x1, y1, x2, y2, x3, y3, cor) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fillStyle = cor;
    ctx.fill();
  }

  function desenharRetangulo(ctx, x, y, largura, altura, cor) {
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, altura);
  }

  function desenharArvore(ctx, x, y) {
    desenharRetangulo(ctx, x, y, 10, 40, "saddlebrown");
    desenharCirculo(ctx, x + 5, y - 5, 20, "green");
  }

  function criarPainel1(ctx) {
    desenharForma(ctx, 0, 0, 50, "blue");
    desenharForma(ctx, 250, 0, 50, "red");
    desenharForma(ctx, 280, 140, 20, "aqua");
    desenharForma(ctx, 280, 280, 20, "black");
    desenharForma(ctx, 280, 260, 20, "black");
    desenharForma(ctx, 260, 280, 20, "black");
    desenharForma(ctx, 0, 280, 20, "yellow");
    desenharForma(ctx, 0, 260, 20, "yellow");
    desenharForma(ctx, 20, 280, 20, "yellow");
    desenharForma(ctx, 0, 150, 20, "aqua");
    desenharForma(ctx, 0, 130, 20, "aqua");
    desenharForma(ctx, 110, 150, 40, "red");

    desenharTraco(ctx, 50, 50, 150, 150, "blue");
    desenharTraco(ctx, 250, 50, 150, 150, "red");
    desenharTraco(ctx, 0, 150, 300, 150, "green");
    desenharTraco(ctx, 150, 150, 150, 300, "grey");

    desenharCirculo(ctx, 150, 120, 10, "#add8e6");
    desenharCirculo(ctx, 150, 120, 10, "blue", false);
    desenharCirculo(ctx, 75, 220, 15, "green", false);
    desenharCirculo(ctx, 225, 220, 15, "green", false);
    desenharCirculo(ctx, 75, 220, 15, "yellow");
    desenharCirculo(ctx, 225, 220, 15, "yellow");

    desenharArco(ctx, 150, 300, 30, 1, 2, "aqua");
    desenharArco(ctx, 150, 150, 50, 1, 2, "green", false);
    desenharArco(ctx, 150, 300, 30, 1, 2, "green", false);
    desenharArco(ctx, 300, 200, 40, 1.5, 2, "green", false);
    desenharArco(ctx, 150, 300, 50, 1.5, 2, "green", false);
    desenharArco(ctx, 150, 300, 70, 1, 1.5, "green", false);
    desenharArco(ctx, 150, 150, 80, 1.75, 2, "green", false);
    desenharArco(ctx, 150, 150, 80, 1, 1.25, "green", false);

    desenharTraco(ctx, 0, 0, 0, 300, "#000000", 5);
    desenharTraco(ctx, 300, 0, 300, 300, "#000000", 5);
    desenharTraco(ctx, 0, 0, 300, 0, "#000000", 5);
    desenharTraco(ctx, 0, 300, 300, 300, "#000000", 5);

    adicionarTexto(ctx, "Canvas", 115, 50, "black", 20);
  }

  function criarPainel2(ctx) {
    // Fundo
    desenharRetangulo(ctx, 0, 0, 300, 300, "mediumaquamarine");

    // Pavimento
    desenharRetangulo(ctx, 0, 200, 300, 100, "gray");

    // Construção
    desenharRetangulo(ctx, 120, 140, 60, 60, "#8B4513");
    desenharTriangulo(ctx, 120, 140, 150, 110, 180, 140, "#F25F4C");

    // Entrada
    desenharRetangulo(ctx, 140, 170, 20, 30, "#5A3E1B");

    // Aberturas
    desenharRetangulo(ctx, 125, 155, 15, 15, "deepskyblue");
    desenharRetangulo(ctx, 160, 155, 15, 15, "deepskyblue");

    // Vegetação
    desenharArvore(ctx, 60, 160);
    desenharArvore(ctx, 240, 230);

    // Astro
    desenharCirculo(ctx, 220, 60, 30, "yellow");

    // Água
    desenharRetangulo(ctx, 0, 250, 130, 50, "blue");
    desenharRetangulo(ctx, 0, 200, 50, 100, "blue");
    desenharCirculo(ctx, 0, 200, 50, "blue");
    desenharCirculo(ctx, 130, 300, 50, "blue");
  }

  criarPainel1(ctx1);
  criarPainel2(ctx2);
});
