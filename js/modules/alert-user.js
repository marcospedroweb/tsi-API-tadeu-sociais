export default function initAlertUser(color, msg) {
  const alertColors = ['alert-danger', 'alert-success', 'alert-warning'];
  const mainAlert = document.querySelector('#main-alert');

  function removeAlertColor() {
    alertColors.forEach(element => mainAlert.classList.remove(element));
  }

  if (mainAlert) {
    const alertSpan = mainAlert.querySelector('span');

    removeAlertColor();
    mainAlert.classList.add(`alert-${color}`);

    alertSpan.textContent = msg;

    mainAlert.classList.toggle('d-none');
    setTimeout(() => {
      mainAlert.classList.toggle('show');
    }, 100);

    setTimeout(() => {
      mainAlert.classList.toggle('show');
    }, 1000);

    setTimeout(() => {
      mainAlert.classList.toggle('d-none');
    }, 300);
  }
}

