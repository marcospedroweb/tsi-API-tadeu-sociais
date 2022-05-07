import initAlertUser from "./alert-user.js";

export default function initRegister() {

}

const formRegister = document.querySelector('#form-register');

if (formRegister) {
  formRegister.addEventListener('submit', event => {
    event.preventDefault();

    const name = formRegister.querySelector('#name').value;
    const email = formRegister.querySelector('#email').value;
    const password = formRegister.querySelector('#password').value;
    const confirmPassword = formRegister.querySelector('#confirm-password').value;
    if (password.toLowerCase() === password) {
      console.log('A senha deve possuir ao menos 1 letra maiúscula')
      initAlertUser('danger', 'A senha deve possuir ao menos 1 letra maiúscula');
    } else if (password !== confirmPassword) {
      console.log('As senhas não são iguais!')
      initAlertUser('danger', 'As senhas não são iguais!');
    }
  });
}