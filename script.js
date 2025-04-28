document.addEventListener("DOMContentLoaded", () => {
  const canvas1 = document.getElementById("canvas1");
  const ctx1 = canvas1.getContext("2d");

  const canvas2 = document.getElementById("canvas2");
  const ctx2 = canvas2.getContext("2d");

  const CANVAS_WIDTH = 300;
  const CANVAS_HEIGHT = 300;

  function desenharRetangulo(ctx, x, y, largura, altura, cor) {
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, altura);
  }

  function desenharQuadrado(ctx, x, y, tamanho, cor) {
    desenharRetangulo(ctx, x, y, tamanho, tamanho, cor);
  }

  function desenharLinha(ctx, x1, y1, x2, y2, cor, espessura = 2) {
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

  function desenharTriangulo(ctx, x1, y1, x2, y2, x3, y3, cor) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fillStyle = cor;
    ctx.fill();
  }

  function adicionarTexto(ctx, texto, x, y, cor, tamanho) {
    ctx.font = `${tamanho}px Arial`;
    ctx.fillStyle = cor;
    ctx.fillText(texto, x, y);
  }

  function desenharArvore(ctx, x, y) {
    desenharRetangulo(ctx, x, y, 10, 40, "saddlebrown");
    desenharCirculo(ctx, x + 5, y - 5, 20, "green");
  }

  function desenharBorda(ctx, largura = 5) {
    const cor = "#000000";
    desenharLinha(ctx, 0, 0, 0, CANVAS_HEIGHT, cor, largura);
    desenharLinha(
      ctx,
      CANVAS_WIDTH,
      0,
      CANVAS_WIDTH,
      CANVAS_HEIGHT,
      cor,
      largura,
    );
    desenharLinha(ctx, 0, 0, CANVAS_WIDTH, 0, cor, largura);
    desenharLinha(
      ctx,
      0,
      CANVAS_HEIGHT,
      CANVAS_WIDTH,
      CANVAS_HEIGHT,
      cor,
      largura,
    );
  }

  function criarPainel1(ctx) {
    desenharQuadrado(ctx, 0, 0, 50, "blue");
    desenharQuadrado(ctx, 250, 0, 50, "red");
    desenharQuadrado(ctx, 280, 140, 20, "aqua");

    desenharQuadrado(ctx, 280, 280, 20, "black");
    desenharQuadrado(ctx, 280, 260, 20, "black");
    desenharQuadrado(ctx, 260, 280, 20, "black");

    desenharQuadrado(ctx, 0, 280, 20, "yellow");
    desenharQuadrado(ctx, 0, 260, 20, "yellow");
    desenharQuadrado(ctx, 20, 280, 20, "yellow");

    desenharQuadrado(ctx, 0, 150, 20, "aqua");
    desenharQuadrado(ctx, 0, 130, 20, "aqua");

    desenharQuadrado(ctx, 110, 150, 40, "red");

    // linhas
    desenharLinha(ctx, 50, 50, 150, 150, "blue");
    desenharLinha(ctx, 250, 50, 150, 150, "red");
    desenharLinha(ctx, 0, 150, 300, 150, "green");
    desenharLinha(ctx, 150, 150, 150, 300, "grey");

    // crculos
    desenharCirculo(ctx, 150, 120, 10, "#add8e6");
    desenharCirculo(ctx, 150, 120, 10, "blue", false);
    desenharCirculo(ctx, 75, 220, 15, "green", false);
    desenharCirculo(ctx, 225, 220, 15, "green", false);
    desenharCirculo(ctx, 75, 220, 15, "yellow");
    desenharCirculo(ctx, 225, 220, 15, "yellow");

    // arcos
    desenharArco(ctx, 150, 300, 30, 1, 2, "aqua");
    desenharArco(ctx, 150, 150, 50, 1, 2, "green", false);
    desenharArco(ctx, 150, 300, 30, 1, 2, "green", false);
    desenharArco(ctx, 300, 200, 40, 1.5, 2, "green", false);
    desenharArco(ctx, 150, 300, 50, 1.5, 2, "green", false);
    desenharArco(ctx, 150, 300, 70, 1, 1.5, "green", false);
    desenharArco(ctx, 150, 150, 80, 1.75, 2, "green", false);
    desenharArco(ctx, 150, 150, 80, 1, 1.25, "green", false);

    desenharBorda(ctx);
    adicionarTexto(ctx, "Canvas", 115, 50, "black", 20);
  }

  function criarPainel2(ctx) {
    desenharRetangulo(
      ctx,
      0,
      0,
      CANVAS_WIDTH,
      CANVAS_HEIGHT,
      "mediumaquamarine",
    );

    // base
    desenharRetangulo(ctx, 0, 200, CANVAS_WIDTH, 100, "gray");

    // casa
    desenharRetangulo(ctx, 120, 140, 60, 60, "#8B4513");
    desenharTriangulo(ctx, 120, 140, 150, 110, 180, 140, "#F25F4C");

    // porta e janela
    desenharRetangulo(ctx, 140, 170, 20, 30, "#5A3E1B");
    desenharRetangulo(ctx, 125, 155, 15, 15, "deepskyblue");
    desenharRetangulo(ctx, 160, 155, 15, 15, "deepskyblue");

    // externo
    desenharArvore(ctx, 60, 160);
    desenharArvore(ctx, 240, 230);
    desenharCirculo(ctx, 220, 60, 30, "yellow");

    // agua
    desenharRetangulo(ctx, 0, 250, 130, 50, "blue");
    desenharRetangulo(ctx, 0, 200, 50, 100, "blue");
    desenharCirculo(ctx, 0, 200, 50, "blue");
    desenharCirculo(ctx, 130, 300, 50, "blue");
  }

  criarPainel1(ctx1);
  criarPainel2(ctx2);
});

// Código para a página de animação
document.addEventListener('DOMContentLoaded', function() {
  const animationCanvas = document.getElementById('animationCanvas');
  if (!animationCanvas) return;

  const ctx = animationCanvas.getContext('2d');
  const img = new Image();
  img.src = 'images/ponto.png';
  
  let imgX = animationCanvas.width / 2;
  let imgY = animationCanvas.height / 2;
  const imgSize = 30;
  let targetX = imgX;
  let targetY = imgY;

  function updatePosition(e) {
    const rect = animationCanvas.getBoundingClientRect();
    targetX = e.clientX - rect.left;
    targetY = e.clientY - rect.top;
    
    // Garantir que o ponteiro fique centralizado na imagem
    targetX = Math.max(imgSize/2, Math.min(targetX, animationCanvas.width - imgSize/2));
    targetY = Math.max(imgSize/2, Math.min(targetY, animationCanvas.height - imgSize/2));
  }

  function animate() {
    // Atualizar posição suavemente
    imgX += (targetX - imgX) * 0.1;
    imgY += (targetY - imgY) * 0.1;

    // Limpar canvas
    ctx.clearRect(0, 0, animationCanvas.width, animationCanvas.height);
    
    // Desenhar imagem com o ponteiro centralizado
    if (img.complete) {
      ctx.drawImage(img, imgX - imgSize/2, imgY - imgSize/2, imgSize, imgSize);
    } else {
      // Fallback caso a imagem não tenha carregado
      ctx.fillStyle = 'red';
      ctx.beginPath();
      ctx.arc(imgX, imgY, imgSize/2, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  animationCanvas.addEventListener('mousemove', updatePosition);
  animationCanvas.addEventListener('mouseleave', function() {
    // Quando o mouse sai, manter último ponto válido
    targetX = Math.max(imgSize/2, Math.min(targetX, animationCanvas.width - imgSize/2));
    targetY = Math.max(imgSize/2, Math.min(targetY, animationCanvas.height - imgSize/2));
  });

  img.onload = function() {
    // Iniciar animação quando a imagem carregar
    animate();
  };

  // Iniciar mesmo se a imagem não carregar
  setTimeout(animate, 1000);
});
