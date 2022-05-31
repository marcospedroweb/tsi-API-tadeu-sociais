export default function initDrawingBoard() {

}

const canvas = document.querySelector('#drawingBoard');
const ctx = canvas.getContext('2d');
const drawingOptionLineWidth = document.querySelector('#option-line-width');
const drawingOptionLineCap = document.querySelector('#option-line-cap');
const drawingOptionLineColor = document.querySelector('#option-line-color');

let drawing = false;
let lineWidth = drawingOptionLineWidth.value;
let lineCap = drawingOptionLineCap.value;
let strokeStyle = drawingOptionLineColor.value;


function attDrawingOptions() {
  lineWidth = drawingOptionLineWidth.value;
  lineCap = drawingOptionLineCap.value;
  strokeStyle = drawingOptionLineColor.value;
}

drawingOptionLineWidth.addEventListener('input', event => {
  if (!drawingOptionLineWidth.value.length) {
    drawingOptionLineWidth.value = 5;
    attDrawingOptions();
  } else {
    attDrawingOptions();
  }
});

drawingOptionLineCap.addEventListener('change', event => {
  attDrawingOptions();
});

drawingOptionLineColor.addEventListener('change', event => {
  attDrawingOptions();
});

function getMousePosition(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  return {
    x: x,
    y: y,
  }
}

function draw(event) {
  if (!drawing)
    return;

  const coord = getMousePosition(canvas, event);

  //Config
  ctx.lineWidth = lineWidth;
  ctx.lineCap = lineCap;
  ctx.strokeStyle = strokeStyle;

  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(coord.x, coord.y);
}

canvas.addEventListener('mousedown', event => {
  drawing = true;
  draw(event);
});

canvas.addEventListener('mouseup', event => {
  drawing = false;
  ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);
