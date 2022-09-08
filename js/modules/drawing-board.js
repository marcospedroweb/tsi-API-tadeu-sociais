import initAlertUser from './alert-user.js';

export default class DrawingBoard {
  // Classe responsavel por toda funcionalidade de desenhar no canvas
  constructor(
    canvas,
    btnDraw,
    optionLineWidth,
    optionLineCap,
    optionLineColor,
    btnClear,
    btnSave,
  ) {
    // Canvas
    this.canvas = document.querySelector(canvas);
    // Botão para iniciar a desenhar
    this.btnDraw = document.querySelector(btnDraw);
    // Opções de formatação da linha
    this.drawingOptionLineWidth = document.querySelector(optionLineWidth);
    this.drawingOptionLineCap = document.querySelector(optionLineCap);
    this.drawingOptionLineColor = document.querySelector(optionLineColor);
    // Botão para limpar o desenho
    this.btnClearDrawing = document.querySelector(btnClear);
    // Botão para salvar o desenho
    this.btnSaveDrawing = document.querySelector(btnSave);

    if (this.canvas && this.btnDraw) {
      // Span de desenho
      this.spanContent = document.querySelector('#span-draw');
      // Contexto do canvas
      this.ctx = this.canvas.getContext('2d');
      this.canvasDataset = this.canvas.dataset;
      // Input para armazenar o desenho
      this.inputDraw = document.querySelector('#data-draw');
      // Drawing options
    }
  }

  attDrawingOptions() {
    //Atualiza as formatações do pincel
    this.lineWidth = this.drawingOptionLineWidth.value;
    this.lineCap = this.drawingOptionLineCap.value;
    this.strokeStyle = this.drawingOptionLineColor.value;
  }

  addGeneralEvents() {
    this.drawingOptionLineWidth.addEventListener('input', (event) => {
      //Altera a grossura do pincel
      if (
        !this.drawingOptionLineWidth.value.length ||
        this.drawingOptionLineWidth.value == 0
      ) {
        this.drawingOptionLineWidth.value = 5;
        attDrawingOptions();
      } else {
        attDrawingOptions();
      }
    });

    this.drawingOptionLineCap.addEventListener('change', (event) => {
      event.preventDefault();
      //Altera a ponta do pincel
      attDrawingOptions();
    });

    this.drawingOptionLineColor.addEventListener('change', (event) => {
      event.preventDefault();
      //Altera a cor do pincel
      attDrawingOptions();
    });
  }

  addDesktopEvents() {
    this.btnDraw.addEventListener('click', () => {
      //Verifica o tamanho da tela, alterando o tamanho do canvas
      if (window.innerWidth > 992) {
        this.canvas.width = 600;
        this.canvas.height = 600;
      }
    });

    this.canvas.addEventListener('mousedown', (event) => {
      event.preventDefault();
      this.canvasDataset.drawing = true; // Usuario clicou, desenhar no quadro é permitido
      draw(event);
    });

    this.canvas.addEventListener('mouseup', (event) => {
      event.preventDefault();
      this.canvasDataset.drawing = false; // Clique do usuario terminou, desenhar no quadro é recusado
      this.ctx.beginPath(); // Começa o "caminho" para quando usuario clicar dnv
    });

    this.canvas.addEventListener('mousemove', this.draw); // Ao usuario mover o mouse, começa a função [draw]

    this.btnClearDrawing.addEventListener('click', (event) => {
      event.preventDefault();
      //Limpa por completo o canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    });

    this.btnSaveDrawing.addEventListener('click', () => {
      //Save o desenho no input
      const drawing = canvas.toDataURL('image/png', 1);
      if (drawing.length > 500000)
        initAlertUser(
          'danger',
          'O tamanho do arquivo é maior que 500KB, tente novamente',
        );
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

  addMobileEvents() {
    this.btnDraw.addEventListener('touchstart', () => {
      //Verifica o tamanho da tela, alterando o tamanho do canvas
      if (window.innerWidth < 992) {
        this.canvas.width = 300;
        this.canvas.height = 300;
      }
    });
    this.canvas.addEventListener('touchstart', (event) => {
      event.preventDefault();
      this.canvasDataset.drawing = true; // Usuario clicou, desenhar no quadro é permitido
      draw(event);
    });
    this.canvas.addEventListener('touchend', (event) => {
      event.preventDefault();
      this.canvasDataset.drawing = false; // Clique do usuario terminou, desenhar no quadro é recusado
      this.ctx.beginPath(); // Começa o "caminho" para quando usuario clicar dnv
    });
    this.canvas.addEventListener('touchmove', this.draw); // Ao usuario mover o mouse, começa a função [draw]
  }

  getMousePosition(canvas, event) {
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
    };
  }

  draw(event) {
    event.preventDefault();
    // Função responsável por verificar se é permitido desenhar
    if (this.canvasDataset.drawing === 'false') return;

    const coord = getMousePosition(canvas, event);

    this.ctx.lineWidth = lineWidth;
    this.ctx.lineCap = lineCap;
    this.ctx.strokeStyle = strokeStyle;
    this.ctx.lineTo(coord.x, coord.y); // Começa a desenhar na posição do mouse
    this.ctx.stroke(); // Adiciona tinta na posição do mouse
    this.ctx.beginPath(); // Começa o "caminho"
    this.ctx.moveTo(coord.x, coord.y); // Move o "caminho" para a posição que o mouse está
  }

  init() {
    if (this.canvas) {
      this.attDrawingOptions();
    }
  }
}
