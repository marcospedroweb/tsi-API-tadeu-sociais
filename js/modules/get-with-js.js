import alertUser from './alert-user.js';

export default function initGetWithJs() {
  // Pega qualquer "variavel GET" que está na url e armazena em uma variavel

  const parts = window.location.search.substr(1).split('&');

  const $_GET = {};
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < parts.length; i++) {
    const temp = parts[i].split('=');
    $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
  }
  if ($_GET.success)
    if ($_GET.success === 'account-created') {
      alertUser.init('success', 'Conta criada com sucesso!');
      window.location.href = window.location.href.replace(
        '?success=account-created',
        '',
      );
    }
}
