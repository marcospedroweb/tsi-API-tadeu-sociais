export default class FormatTel {
  constructor(input) {
    this.inputTel = document.querySelector(input);
  }

  init() {
    // Formata o input de telefone para o padrão brasileiro
    if (this.inputTel) {
      this.inputTel.addEventListener('input', (event) => {
        // Impedindo o usuario de colar texto no input
        if (event.inputType === 'insertFromPaste') this.inputTel.value = '';
      });

      // Validation
      this.inputTel.addEventListener('keypress', (event) => {
        // Formatando automaticamente o padrão do celular
        if (this.inputTel.value.length === 0 && event.key !== '(')
          this.inputTel.value += '(';
        // Formatando automaticamente o padrão do celular
        else if (this.inputTel.value.length === 3 && event.key !== ')')
          this.inputTel.value += ') ';
        // Formatando automaticamente o padrão do celular
        else if (this.inputTel.value.length === 4 && event.key !== ' ')
          this.inputTel.value += ' ';
        // Formatando automaticamente o padrão do celular
        else if (this.inputTel.value.length === 10 && event.key !== '-')
          this.inputTel.value += '-';
        // Verificando se o cpf está no padrão ou o mais proximo do padrão
        else if (
          this.inputTel.value.length > 0 &&
          this.inputTel.value.match(/\(?\d{2}\)? ?\d{5}-?\d{4}/g)
        )
          event.preventDefault();
        // Bloquando qualquer caracter diferente de "-" e "()"
        else if (
          Number.isNaN(event.key) &&
          event.key !== '-' &&
          event.key !== '(' &&
          event.key !== ')'
        )
          event.preventDefault();
      });
    }
  }
}
