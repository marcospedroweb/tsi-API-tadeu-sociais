/* eslint-disable operator-linebreak */
import alertUser from './helpers/alert-user.js';
import regexValidations from './helpers/regex-validations.js';
import useLocalStorage from './helpers/use-local-storage.js';
import useSessionStorage from './helpers/use-session-storage.js';

export default class Register {
  constructor(form, table) {
    this.form = document.querySelector(form);
    this.table = useLocalStorage('get', table);
    this.userLogged = useSessionStorage('get', 'userLogged');

    this.validationRegexp = regexValidations;
  }

  valideEmail(email) {
    const result = {
      result: true,
      color: 'danger',
    };
    let repeatedEmail;
    // Validando email repetido
    this.table.forEach((user) => {
      if (user.email === email) {
        repeatedEmail = true;
      }
    });

    if (repeatedEmail) {
      // Se tiver email repetido, avisa que já está cadastrado
      result.msg = 'Insira um email valido. Ex: exemploEmail@email.com';
      return result;
    } else if (this.validationRegexp.email.test(email)) {
      // Validando email por regex
      result.msg = 'Este email está indisponível, utilize outro';
      return result;
    }

    // Se não tiver problemas, continuar a execução
    return {
      result: false,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  validePassword(password, confirmPassword) {
    const result = {
      result: true,
      color: 'danger',
      msg: '',
    };
    // Validando senha
    // Validando se há caracteres maiusculos
    if (password.toLowerCase() === password) {
      result.msg = 'A senha deve possuir ao menos 1 letra maiúscula';
      return result;
    } else if (password.length < 4) {
      result.msg = 'A senha deve ter mínimo 4 caracteres';
      return result;
    } else if (password !== confirmPassword) {
      result.msg = 'As senhas devem ser iguais';
      return result;
    }

    // Se não tiver problemas, continuar a execução
    return {
      result: false,
    };
  }

  valideCpf(cpf) {
    const result = {
      result: true,
      color: 'danger',
      msg: '',
    };
    let repeatedCpf;
    this.table.forEach((user) => {
      if (user.cpf === cpf) {
        repeatedCpf = true;
      }
    });

    // Validando cpf
    if (repeatedCpf) {
      result.msg = 'Este CPF já esta sendo utilizando, tente outro.';
      return result;
    } else if (!this.validationRegexp.cpf.test(cpf)) {
      result.msg = 'O CPF deve ser maior que 11 caracteres. Ex: xxx.xxx.xxx-xx';
      return result;
    }

    // Se não tiver problemas, continuar a execução
    return {
      result: false,
    };
  }

  valideTel(tel) {
    const result = {
      result: true,
      color: 'danger',
      msg: '',
    };

    // Validando telefone
    if (
      (tel.length <= 1 && tel.length >= 8) ||
      !this.validationRegexp.tel.test(tel)
    ) {
      result.msg =
        'O número de celular deve ser igual ou maior que 11 caracteres. Ex: (99) 99999-9999';
      return result;
    }

    // Se não tiver problemas, continuar a execução
    return {
      result: false,
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    // Rebendo os valores dos inputs
    const name = this.form.querySelector('#name').value;
    const email = this.form.querySelector('#email').value;
    const password = this.form.querySelector('#password').value;
    const confirmPassword = this.form.querySelector('#confirm-password').value;
    const cpf = this.form.querySelector('#cpf').value;
    const tel = this.form.querySelector('#tel').value;

    // Fazendo a validação dos inputs
    const validatedEmail = this.valideEmail(email);
    const validatedPassword = this.valideCpf(password, confirmPassword);
    const validatedCpf = this.valideCpf(cpf);
    const validatedTel = this.valideCpf(tel);

    if (validatedEmail.result) {
      alertUser.alert(validatedEmail.color, validatedEmail.msg);
      return;
    } else if (validatedPassword.result) {
      alertUser.alert(validatedPassword.color, validatedPassword.msg);
      return;
    } else if (validatedCpf.result) {
      alertUser.alert(validatedCpf.color, validatedCpf.msg);
      return;
    } else if (validatedTel.result) {
      alertUser.alert(validatedTel.color, validatedTel.msg);
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
    useLocalStorage('set', 'users', this.table);

    window.location.href = `${window.location.origin}/login.html?success=account-created`;
  }

  init() {
    if (
      this.userLogged &&
      this.form &&
      window.location.href.indexOf('register.html')
    ) {
      window.location.href = `${window.location.origin}/register.html`;
    }

    if (this.form) {
      this.form.addEventListener('submit', this.handleSubmit);
    }
  }
}
