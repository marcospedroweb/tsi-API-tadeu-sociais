export default function initDrawingBoard() {
  // Função responsavel por toda funcionalidade de desenhar no canvas

  const canvas = document.querySelector('#drawingBoard');
  const canvasDataset = canvas.dataset;
  const ctx = canvas.getContext('2d');
  const drawingOptionLineWidth = document.querySelector('#option-line-width');
  const drawingOptionLineCap = document.querySelector('#option-line-cap');
  const drawingOptionLineColor = document.querySelector('#option-line-color');
  const btnClearDrawing = document.querySelector('#clear-drawing');

  let lineWidth = drawingOptionLineWidth.value;
  let lineCap = drawingOptionLineCap.value;
  let strokeStyle = drawingOptionLineColor.value;


  function attDrawingOptions() {
    //Atualiza as formatações do pincel
    lineWidth = drawingOptionLineWidth.value;
    lineCap = drawingOptionLineCap.value;
    strokeStyle = drawingOptionLineColor.value;
  }

  drawingOptionLineWidth.addEventListener('input', event => {
    //Altera a grossura do pincel
    if (!drawingOptionLineWidth.value.length) {
      drawingOptionLineWidth.value = 5;
      attDrawingOptions();
    } else {
      attDrawingOptions();
    }
  });

  drawingOptionLineCap.addEventListener('change', event => {
    //Altera a ponta do pincel
    attDrawingOptions();
  });

  drawingOptionLineColor.addEventListener('change', event => {
    //Altera a cor do pincel
    attDrawingOptions();
  });

  function getMousePosition(canvas, event) {
    //Retorna a posição X e Y do mouse
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return {
      x: x,
      y: y,
    }
  }

  function draw(event) {
    // Função responsável por verificar se é permitido desenhar
    if (canvasDataset.drawing === 'false')
      return;

    const coord = getMousePosition(canvas, event);

    ctx.lineWidth = lineWidth;
    ctx.lineCap = lineCap;
    ctx.strokeStyle = strokeStyle;
    ctx.lineTo(coord.x, coord.y); // Começa a desenhar na posição do mouse
    ctx.stroke(); // Adiciona tinta na posição do mouse
    ctx.beginPath(); // Começa o "caminho" 
    ctx.moveTo(coord.x, coord.y); // Move o "caminho" para a posição que o mouse está
  }

  canvas.addEventListener('mousedown', event => {
    canvasDataset.drawing = true; // Usuario clicou, desenhar no quadro é permitido
    draw(event);
  });

  canvas.addEventListener('mouseup', event => {
    canvasDataset.drawing = false; // Clique do usuario terminou, desenhar no quadro é recusado
    ctx.beginPath(); // Começa o "caminho" para quando usuario clicar dnv
  });

  canvas.addEventListener('mousemove', draw); // Ao usuario mover o mouse, começa a função [draw]

  btnClearDrawing.addEventListener('click', event => {
    //Limpa por completo o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
}


