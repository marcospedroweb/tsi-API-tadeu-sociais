export default class FormatTel {
  constructor(input) {
    this.inputTel = document.querySelector(input);
  }

  preventPaste(event) {
    // Impedindo o usuario de colar texto no input
    if (event.inputType === 'insertFromPaste') this.inputTel.value = '';
  }

  formatCharacters(event) {
    if (this.inputTel.value.length === 0 && event.key !== '(') {
      // Formatando automaticamente o padrão do celular
      this.inputTel.value += '(';
    } else if (this.inputTel.value.length === 3 && event.key !== ')') {
      // Formatando automaticamente o padrão do celular
      this.inputTel.value += ') ';
    } else if (this.inputTel.value.length === 4 && event.key !== ' ') {
      // Formatando automaticamente o padrão do celular
      this.inputTel.value += ' ';
    } else if (this.inputTel.value.length === 10 && event.key !== '-') {
      // Formatando automaticamente o padrão do celular
      this.inputTel.value += '-';
    } else if (
      // Verificando se o cpf está no padrão ou o mais proximo do padrão
      this.inputTel.value.length > 0 &&
      this.inputTel.value.match(/\(?\d{2}\)? ?\d{5}-?\d{4}/g)
    ) {
      event.preventDefault();
    } else if (
      // Bloquando qualquer caracter diferente de "-" e "()"
      Number.isNaN(event.key) &&
      event.key !== '-' &&
      event.key !== '(' &&
      event.key !== ')'
    ) {
      event.preventDefault();
    }
  }

  init() {
    // Formata o input de telefone para o padrão brasileiro
    if (this.inputTel) {
      this.inputTel.addEventListener('input', this.preventPaste);

      // Validation
      this.inputTel.addEventListener('keypress', this.formatCharacters);
    }
  }
}
