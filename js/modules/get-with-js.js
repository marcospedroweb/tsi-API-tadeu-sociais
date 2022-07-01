import initAlertUser from "./alert-user.js";

export default function initGetWithJs() {
  // Pega qualquer "variavel GET" que está na url e armazena em uma variavel

  let parts = window.location.search.substr(1).split("&");

  let $_GET = {};
  for (let i = 0; i < parts.length; i++) {
    let temp = parts[i].split("=");
    $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
  }
  if ($_GET['success'])
    if ($_GET['success'] == 'account-created') {
      initAlertUser('success', 'Conta criada com sucesso!');
      location.href = location.href.replace('?success=account-created', '');
    }

}