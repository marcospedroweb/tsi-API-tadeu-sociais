export default function initCheckCpf() {
  const inputCpf = document.querySelector('#cpf');

  if (inputCpf) {
    inputCpf.addEventListener('input', event => {
      //Impedindo o usuario de colar texto no input
      if (event.inputType == 'insertFromPaste')
        inputCpf.value = '';
    });

    //Validation
    inputCpf.addEventListener('keypress', event => {
      // Formatando automaticamente o padrão do cpf
      if ([3, 7].includes(inputCpf.value.length) && event.key != '.')
        inputCpf.value += '.';
      // Formatando automaticamente o padrão do cpf
      else if (inputCpf.value.length == 11 && event.key != '-')
        inputCpf.value += '-';
      //Verificando se o cpf está no padrão ou o mais proximo do padrão
      else if (inputCpf.value.length > 10 && inputCpf.value.match(/\d{3}\.?\d{3}\.?\d{3}-?\d{2}/g))
        event.preventDefault();
      //Bloquando qualquer caracter diferente de "-" e "."
      else if (isNaN(event.key) && event.key != '.' && event.key != '-')
        event.preventDefault();
    });
  }
}