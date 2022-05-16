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
    const cpf = formRegister.querySelector('#cpf').value;
    const tel = formRegister.querySelector('#tel').value;

    if (password.toLowerCase() === password) {
      initAlertUser('danger', 'A senha deve possuir ao menos 1 letra maiúscula');
      return;
    } else if (password !== confirmPassword) {
      initAlertUser('danger', 'As senhas não são iguais!');
      return;
    }

    if (cpf.length < 11) {
      initAlertUser('danger', 'O CPF deve ser maior que 11 caracteres. Ex: xxx.xxx.xxx-xx');
      return;
    }

    if (tel.length < 11) {
      initAlertUser('danger', 'O número de celular deve ser maior que 11 caracteres. Ex: (99) 99999-9999');
      return;
    }

    const newUser = {
      id: 0,
      name: name,
      email: email,
      password: password,
      cpf: cpf,
      tel: tel || 'Não registrado',
      posts: [],
    }

    const tableUsers = JSON.parse(localStorage.getItem('users'));

    tableUsers.registeredUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(tableUsers));

    window.location.href = "/login.html?success=account-created";
  });
}