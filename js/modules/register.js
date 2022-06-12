import initAlertUser from "./alert-user.js";

export default function initRegister() {
  // Ao usuario clicar no botão de criar conta, verifica se há dados nos inputs e se não nenhuma conta já registrada com o mesmo email

  const formRegister = document.querySelector('#form-register');
  const userLogged = JSON.parse(sessionStorage.getItem('userLogged'));

  if (userLogged && window.location.href.indexOf('register.html') && formRegister)
    window.location.href = window.location.href.replace('register.html', 'index.html');

  if (formRegister) {
    formRegister.addEventListener('submit', event => {
      event.preventDefault();

      const tableUsers = JSON.parse(localStorage.getItem('users'));
      const name = formRegister.querySelector('#name').value;
      const email = formRegister.querySelector('#email').value;
      const password = formRegister.querySelector('#password').value;
      const confirmPassword = formRegister.querySelector('#confirm-password').value;
      const cpf = formRegister.querySelector('#cpf').value;
      const tel = formRegister.querySelector('#tel').value;
      let emailRepeated = false;
      let cpfRepeated = false;
      const userLogged = JSON.parse(sessionStorage.getItem('userLogged'));

      tableUsers.forEach(user => {
        if (user.email == email)
          emailRepeated = true;
      });
      if (emailRepeated) {
        initAlertUser('danger', 'Este email está indisponível, utilize outro');
        return;
      }

      if (password.toLowerCase() === password) {
        initAlertUser('danger', 'A senha deve possuir ao menos 1 letra maiúscula');
        return;
      } else if (password.length < 4) {
        initAlertUser('danger', 'A senha deve ter mínimo 4 caracteres');
        return;
      } else if (password !== confirmPassword) {
        initAlertUser('danger', 'As senhas não são iguais!');
        return;
      }

      tableUsers.forEach(user => {
        if (user.cpf == cpf)
          emailRepeated = true;
      });
      if (cpfRepeated) {
        initAlertUser('danger', 'Este CPF já esta sendo utilizando, tente outro.');
        return;
      }
      if (!cpf.match(/\d{3}\.?\d{3}\.?\d{3}-?\d{2}/g)) {
        initAlertUser('danger', 'O CPF deve ser maior que 11 caracteres. Ex: xxx.xxx.xxx-xx');
        return;
      }

      if (tel.length > 1 && !tel.match(/\(?\d{2}\)?\ ?\d{5}\-?\d{4}/g)) {
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
      }

      tableUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(tableUsers));

      window.location.href = window.location.href.replace('register.html', 'login.html?success=account-created');
    });
  }

}