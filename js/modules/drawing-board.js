import alertUser from './helpers/alert-user.js';

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
    // Atualiza as formatações do pincel
    this.lineWidth = this.drawingOptionLineWidth.value;
    this.lineCap = this.drawingOptionLineCap.value;
    this.strokeStyle = this.drawingOptionLineColor.value;
  }

  addGeneralEvents() {
    this.drawingOptionLineWidth.addEventListener('input', () => {
      // Altera a grossura do pincel
      if (
        !this.drawingOptionLineWidth.value.length ||
        this.drawingOptionLineWidth.value === 0
      ) {
        this.drawingOptionLineWidth.value = 5;
        this.attDrawingOptions();
      } else {
        this.attDrawingOptions();
      }
    });

    this.drawingOptionLineCap.addEventListener('change', (event) => {
      event.preventDefault();
      // Altera a ponta do pincel
      this.attDrawingOptions();
    });

    this.drawingOptionLineColor.addEventListener('change', (event) => {
      event.preventDefault();
      // Altera a cor do pincel
      this.attDrawingOptions();
    });
  }

  addDesktopEvents() {
    this.this.btnDraw.addEventListener('click', () => {
      // Verifica o tamanho da tela, alterando o tamanho do canvas
      if (window.innerWidth > 992) {
        this.canvas.width = 600;
        this.canvas.height = 600;
      }
    });

    this.canvas.addEventListener('mousedown', (event) => {
      event.preventDefault();
      // Usuario clicou, desenhar no quadro é permitido
      this.canvasDataset.drawing = true;
      this.draw(event);
    });

    this.canvas.addEventListener('mouseup', (event) => {
      event.preventDefault();
      // Clique do usuario terminou, desenhar no quadro é recusado
      this.canvasDataset.drawing = false;
      // Começa o "caminho" para quando usuario clicar dnv
      this.ctx.beginPath();
    });

    // Ao usuario mover o mouse, começa a função [draw]
    this.canvas.addEventListener('mousemove', this.draw);

    this.btnClearDrawing.addEventListener('click', (event) => {
      event.preventDefault();
      // Limpa por completo o canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    });

    this.btnSaveDrawing.addEventListener('click', () => {
      // Salva o desenho no input
      const drawing = this.canvas.toDataURL('image/png', 1);
      if (drawing.length > 500000) {
        // Se o desenho for maior de 500KB, retorna um aviso
        alertUser.alert(
          'danger',
          'O tamanho do arquivo é maior que 500KB, tente novamente',
        );
      } else {
        // Adicionando ao input
        this.inputDraw.value = drawing;

        // Desativa o botão de desenhar
        if (!this.btnDraw.classList.contains('disabled')) {
          this.btnDraw.classList.toggle('disabled');
        }
        // Ativa o span para apagar
        if (this.spanContent.classList.contains('d-none')) {
          this.spanContent.classList.toggle('d-none');
        }

        setTimeout(() => {
          // Mostra o span
          if (!this.spanContent.classList.contains('show')) {
            this.spanContent.classList.toggle('show');
          }
        }, 250);
      }
    });
  }

  addMobileEvents() {
    this.this.btnDraw.addEventListener('touchstart', () => {
      // Verifica o tamanho da tela, alterando o tamanho do canvas
      if (window.innerWidth < 992) {
        this.canvas.width = 300;
        this.canvas.height = 300;
      }
    });
    this.canvas.addEventListener('touchstart', (event) => {
      event.preventDefault();
      // Usuario clicou, desenhar no quadro é permitido
      this.canvasDataset.drawing = true;
      this.draw(event);
    });
    this.canvas.addEventListener('touchend', (event) => {
      event.preventDefault();
      // Clique do usuario terminou, desenhar no quadro é recusado
      this.canvasDataset.drawing = false;
      // Começa o "caminho" para quando usuario clicar dnv
      this.ctx.beginPath();
    });
    // Ao usuario mover o mouse, começa a função [draw]
    this.canvas.addEventListener('touchmove', this.draw);
  }

  // eslint-disable-next-line class-methods-use-this
  getMousePosition(canvas, event) {
    event.preventDefault();
    // Retorna a posição X e Y do mouse
    let x;
    let y;
    const rect = canvas.getBoundingClientRect();
    if (event.changedTouches) {
      // Posição x e y mobile
      x = event.changedTouches[0].clientX - rect.left;
      y = event.changedTouches[0].clientY - rect.top;
    } else {
      // Posição x e y desktop
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
    }
    return {
      x,
      y,
    };
  }

  draw(event) {
    event.preventDefault();
    // Função responsável por verificar se é permitido desenhar
    if (this.canvasDataset.drawing === 'false') {
      return;
    }

    // Retorna a posição X e Y do mouse
    const coord = this.getMousePosition(this.canvas, event);

    // Adicionando o "style" do desenho
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.lineCap = this.lineCap;
    this.ctx.strokeStyle = this.strokeStyle;
    // Começa a desenhar na posição do mouse
    this.ctx.lineTo(coord.x, coord.y);
    // Adiciona tinta na posição do mouse
    this.ctx.stroke();
    // Começa o "caminho"
    this.ctx.beginPath();
    // Move o "caminho" para a posição que o mouse está
    this.ctx.moveTo(coord.x, coord.y);
  }

  init() {
    if (this.canvas) {
      this.attDrawingOptions();
    }
  }
}
