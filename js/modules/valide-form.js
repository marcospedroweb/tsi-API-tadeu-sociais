export default class ValideForm {
  // Validação de inputs do boostrap
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  constructor(form) {
    this.forms = document.querySelectorAll(form);
  }

  init() {
    Array.prototype.slice.call(this.forms).forEach((form) => {
      form.addEventListener(
        'submit',
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add('was-validated');
        },
        false,
      );
    });
  }
}
