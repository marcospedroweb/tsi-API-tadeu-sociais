class AlertUser {
  constructor(alert, span) {
    this.alert = document.querySelector(alert);
    this.alertSpan = document.querySelector(span);
    this.alertColors = ['alert-danger', 'alert-success', 'alert-warning'];
  }

  removeAlertColor() {
    this.alertColors.forEach((element) => this.alert.classList.remove(element));
  }

  init(color, msg) {
    if (this.alert && color && msg) {
      this.removeAlertColor();
      this.alert.classList.add(`alert-${color}`);
      this.alertSpan.textContent = msg;
      this.alert.classList.toggle('d-none');
      setTimeout(() => {
        this.alert.classList.toggle('show');
      }, 200);
      setTimeout(() => {
        this.alert.classList.toggle('show');
        setTimeout(() => {
          this.alert.classList.toggle('d-none');
        }, 400);
      }, 5000);
    }
  }
}
const alertUser = new AlertUser('#main-alert', 'span');
export default alertUser;
