export default function initCheckTel() {
  const inputTel = document.querySelector('#tel');

  if (inputTel) {
    inputTel.addEventListener('input', event => {
      //Impedindo o usuario de colar texto no input
      if (event.inputType == 'insertFromPaste')
        inputTel.value = '';
    });

    //Validation
    inputTel.addEventListener('keypress', event => {
      // Formatando automaticamente o padrão do celular
      if (inputTel.value.length == 0 && event.key !== '(')
        inputTel.value += '(';
      // Formatando automaticamente o padrão do celular
      else if (inputTel.value.length == 3 && event.key !== ')')
        inputTel.value += ') ';
      // Formatando automaticamente o padrão do celular
      else if (inputTel.value.length == 4 && event.key !== ' ')
        inputTel.value += ' ';
      // Formatando automaticamente o padrão do celular
      else if (inputTel.value.length == 10 && event.key !== '-')
        inputTel.value += '-';
      //Verificando se o cpf está no padrão ou o mais proximo do padrão
      else if (inputTel.value.length > 0 && inputTel.value.match(/\(?\d{2}\)?\ ?\d{5}\-?\d{4}/g))
        event.preventDefault();
      //Bloquando qualquer caracter diferente de "-" e "()"
      else if (isNaN(event.key) && event.key !== '-' && event.key !== '(' && event.key !== ')')
        event.preventDefault();
    });
  }

}