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
    const tel = formRegister.querySelector('#tel').value;

    if (password.toLowerCase() === password)
      initAlertUser('danger', 'A senha deve possuir ao menos 1 letra maiúscula');
    else if (password !== confirmPassword)
      initAlertUser('danger', 'As senhas não são iguais!');

    const newUser = {
      name: name,
      email: email,
      password: password,
      tel: tel || 'Não registrado',
    }

    const tableUsers = JSON.parse(localStorage.getItem('users'));

    tableUsers.registeredUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(tableUsers));

    window.location.href = "/login.html?success=account-created";
  });
}