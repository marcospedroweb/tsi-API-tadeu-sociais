/* eslint-disable class-methods-use-this */
class AlertUser {
  constructor(alert, span) {
    this.alert = document.querySelector(alert);
    this.alertSpan = document.querySelector(span);
    this.alertColors = ['alert-danger', 'alert-success', 'alert-warning'];
  }

  removeAlertColor() {
    // Remove todas as cores atuais do alert
    this.alertColors.forEach((element) => this.alert.classList.remove(element));
  }

  returnClassName(name) {
    // Verifica o nome passado e retorna o nome da classe compelto
    return this.alertColors.filter((element) => element.indexOf(name) !== -1);
  }

  returnColor(color) {
    // Verifica a cor do parametro e devolve o nome completo da classe
    if (['verde', 'green', 'success'].includes(color)) {
      return this.returnClassName('success');
    } else if (['vermelho', 'red', 'danger'].includes(color)) {
      return this.returnClassName('danger');
    } else if (['amarelo', 'yellow', 'warning'].includes(color)) {
      return this.returnClassName('warning');
    } else {
      return 'alert-warning';
    }
  }

  alert(color, msg) {
    if (this.alert && color && msg) {
      this.showingAlert();
      this.removeAlertColor();
      this.alert.classList.add(this.returnColor(color));
      this.alertSpan.textContent = msg;
      // Aciona o alert
      this.alert.classList.toggle('d-none');
      setTimeout(() => {
        // Mostra o alert
        this.alert.classList.toggle('show');
      }, 200);
      setTimeout(() => {
        // Esconde o alert
        this.alert.classList.toggle('show');
        setTimeout(() => {
          // "Apaga" o alert
          this.alert.classList.toggle('d-none');
        }, 400);
      }, 5000);
    }
  }
}
const alertUser = new AlertUser('#main-alert', 'span');
export default alertUser;
