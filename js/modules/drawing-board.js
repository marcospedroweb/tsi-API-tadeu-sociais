import initAlertUser from "./alert-user.js";

export default function initDrawingBoard() {
  // Função responsavel por toda funcionalidade de desenhar no canvas

  const canvas = document.querySelector('#drawingBoard');

  if (canvas) {
    const btnDraw = document.querySelector('#btn-add-draw');
    const ctx = canvas.getContext('2d');
    const canvasDataset = canvas.dataset;
    const drawingOptionLineWidth = document.querySelector('#option-line-width');
    const drawingOptionLineCap = document.querySelector('#option-line-cap');
    const drawingOptionLineColor = document.querySelector('#option-line-color');
    const btnClearDrawing = document.querySelector('#clear-drawing');
    const btnSaveDrawing = document.querySelector('#save-draw');
    const spanContent = document.querySelector('#span-draw');
    const inputDraw = document.querySelector('#data-draw');

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
      if (!drawingOptionLineWidth.value.length || drawingOptionLineWidth.value == 0) {
        drawingOptionLineWidth.value = 5;
        attDrawingOptions();
      } else {
        attDrawingOptions();
      }
    });

    drawingOptionLineCap.addEventListener('change', event => {
      event.preventDefault();
      //Altera a ponta do pincel
      attDrawingOptions();
    });

    drawingOptionLineColor.addEventListener('change', event => {
      event.preventDefault();
      //Altera a cor do pincel
      attDrawingOptions();
    });

    function getMousePosition(canvas, event) {
      event.preventDefault();
      //Retorna a posição X e Y do mouse
      let x, y;
      const rect = canvas.getBoundingClientRect();
      if (event.changedTouches) {
        x = event.changedTouches[0].clientX - rect.left;
        y = event.changedTouches[0].clientY - rect.top;
      } else {
        x = event.clientX - rect.left;
        y = event.clientY - rect.top;
      }
      return {
        x: x,
        y: y,
      }
    }

    function draw(event) {
      event.preventDefault();
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
      event.preventDefault();
      canvasDataset.drawing = true; // Usuario clicou, desenhar no quadro é permitido
      draw(event);
    });
    //Mobile
    canvas.addEventListener('touchstart', event => {
      event.preventDefault();
      canvasDataset.drawing = true; // Usuario clicou, desenhar no quadro é permitido
      draw(event);
    });

    canvas.addEventListener('mouseup', event => {
      event.preventDefault();
      canvasDataset.drawing = false; // Clique do usuario terminou, desenhar no quadro é recusado
      ctx.beginPath(); // Começa o "caminho" para quando usuario clicar dnv
    });
    //Mobile
    canvas.addEventListener('touchend', event => {
      event.preventDefault();
      canvasDataset.drawing = false; // Clique do usuario terminou, desenhar no quadro é recusado
      ctx.beginPath(); // Começa o "caminho" para quando usuario clicar dnv
    });

    canvas.addEventListener('mousemove', draw); // Ao usuario mover o mouse, começa a função [draw]
    //Mobile
    canvas.addEventListener('touchmove', draw); // Ao usuario mover o mouse, começa a função [draw]

    btnDraw.addEventListener('click', () => {
      //Verifica o tamanho da tela, alterando o tamanho do canvas
      if (window.innerWidth > 992) {
        canvas.width = 600;
        canvas.height = 600;
      }
    });
    btnDraw.addEventListener('touchstart', () => {
      //Verifica o tamanho da tela, alterando o tamanho do canvas
      if (window.innerWidth < 992) {
        canvas.width = 300;
        canvas.height = 300;
      }
    });

    btnClearDrawing.addEventListener('click', event => {
      event.preventDefault();
      //Limpa por completo o canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    btnSaveDrawing.addEventListener('click', () => {
      //Save o desenho no input
      const drawing = canvas.toDataURL('image/png', 1);
      if (drawing.length > 500000)
        initAlertUser('danger', 'O tamanho do arquivo é maior que 500KB, tente novamente');
      else {
        inputDraw.value = drawing;

        if (!btnDraw.classList.contains('disabled'))
          btnDraw.classList.toggle('disabled');
        if (spanContent.classList.contains('d-none'))
          spanContent.classList.toggle('d-none');

        setTimeout(() => {
          if (!spanContent.classList.contains('show'))
            spanContent.classList.toggle('show');
        }, 250);
      }
    });

  }
}


