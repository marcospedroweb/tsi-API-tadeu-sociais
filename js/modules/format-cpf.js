import regexValidations from './helpers/regex-validations';

export default class FormatCpf {
  constructor(input) {
    this.input = document.querySelector(input);
  }

  preventPaste(event) {
    // Impedindo o usuario de colar texto no input
    if (event.inputType === 'insertFromPaste') {
      this.inputCpf.value = '';
    }
  }

  formatCharacters(event) {
    if ([3, 7].includes(this.inputCpf.value.length) && event.key !== '.') {
      // Formatando automaticamente o padrão do cpf
      this.inputCpf.value += '.';
    } else if (this.inputCpf.value.length === 11 && event.key !== '-') {
      // Formatando automaticamente o padrão do cpf
      this.inputCpf.value += '-';
    } else if (
      // Verificando se o cpf está no padrão ou o mais proximo do padrão
      this.inputCpf.value.length > 10 &&
      regexValidations.cpf.test(this.inputCpf.value)
    ) {
      event.preventDefault();
    } else if (
      // Bloquando qualquer caracter diferente de "-" e "."
      Number.isNaN(event.key) &&
      event.key !== '.' &&
      event.key !== '-'
    ) {
      event.preventDefault();
    }
  }

  init() {
    // Formata o input de cpf

    if (this.inputCpf) {
      this.inputCpf.addEventListener('input', this.preventPaste);

      // Validation
      this.inputCpf.addEventListener('keypress', this.formatCharacters);
    }
  }
}
