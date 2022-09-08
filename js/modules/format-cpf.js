export default class FormatCpf {
  constructor(input) {
    this.input = document.querySelector(input);
  }

  init() {
    // Formata o input de cpf

    if (this.inputCpf) {
      this.inputCpf.addEventListener('input', (event) => {
        // Impedindo o usuario de colar texto no input
        if (event.inputType === 'insertFromPaste') this.inputCpf.value = '';
      });

      // Validation
      this.inputCpf.addEventListener('keypress', (event) => {
        // Formatando automaticamente o padrão do cpf
        if ([3, 7].includes(this.inputCpf.value.length) && event.key !== '.')
          this.inputCpf.value += '.';
        // Formatando automaticamente o padrão do cpf
        else if (this.inputCpf.value.length === 11 && event.key !== '-')
          this.inputCpf.value += '-';
        // Verificando se o cpf está no padrão ou o mais proximo do padrão
        else if (
          this.inputCpf.value.length > 10 &&
          /\d{3}\.?\d{3}\.?\d{3}-?\d{2}/g.test(this.inputCpf.value)
        )
          event.preventDefault();
        // Bloquando qualquer caracter diferente de "-" e "."
        else if (
          Number.isNaN(event.key) &&
          event.key !== '.' &&
          event.key !== '-'
        )
          event.preventDefault();
      });
    }
  }
}
