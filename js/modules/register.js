/* eslint-disable no-else-return */
// eslint-disable-next-line import/extensions
import alertUser from './alert-user.js';

export default class Register {
  constructor(form, table) {
    this.form = document.querySelector(form);
    this.table = JSON.parse(localStorage.getItem(table));
    this.userLogged = JSON.parse(sessionStorage.getItem('userLogged'));
  }

  init() {
    if (
      this.userLogged &&
      this.form &&
      window.location.href.indexOf('register.html')
    )
      window.location.href = `${window.location.origin}/register.html`;

    if (this.form) {
      this.form.addEventListener('submit', (event) => {
        event.preventDefault();

        let emailRepeated;
        let cpfRepeated;

        const name = this.form.querySelector('#name').value;
        const email = this.form.querySelector('#email').value;
        const password = this.form.querySelector('#password').value;
        const confirmPassword =
          this.form.querySelector('#confirm-password').value;
        const cpf = this.form.querySelector('#cpf').value;
        const tel = this.form.querySelector('#tel').value;

        // Validando email e cpf repetidos
        this.table.forEach((user) => {
          if (user.email === email) emailRepeated = true;
          if (user.cpf === cpf) cpfRepeated = true;
        });

        // Validando email
        if (email.length === 0 || email.indexOf('@') === -1) {
          alertUser(
            'danger',
            'Insira um email valido. Ex: exemploEmail@email.com',
          );
          return;
        } else if (emailRepeated) {
          alertUser('danger', 'Este email está indisponível, utilize outro');
          return;
        }

        if (password.toLowerCase() === password) {
          alertUser(
            'danger',
            'A senha deve possuir ao menos 1 letra maiúscula',
          );
          return;
        } else if (password.length < 4) {
          alertUser('danger', 'A senha deve ter mínimo 4 caracteres');
          return;
        } else if (password !== confirmPassword) {
          alertUser('danger', 'As senhas não são iguais!');
          return;
        }

        // Validando cpf
        if (cpfRepeated) {
          alertUser(
            'danger',
            'Este CPF já esta sendo utilizando, tente outro.',
          );
          return;
        } else if (!cpf.match(/\d{3}[.-]?\d{3}[.-]?\d{3}-?\d{2}/g)) {
          alertUser(
            'danger',
            'O CPF deve ser maior que 11 caracteres. Ex: xxx.xxx.xxx-xx',
          );
          return;
        }

        if (tel.length > 1 && !tel.match(/\(?\d{2}\)? ?\d{5}-?\d{4}/g)) {
          alertUser(
            'danger',
            'O número de celular deve ser maior que 11 caracteres. Ex: (99) 99999-9999',
          );
          return;
        }

        const newUser = {
          id: 0,
          name,
          email,
          password,
          cpf,
          tel: tel || 'Não registrado',
        };

        this.table.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.table));

        window.location.href = window.location.href.replace(
          'register.html',
          'login.html?success=account-created',
        );
      });
    }
  }
}
