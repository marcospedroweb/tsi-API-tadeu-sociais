/* eslint-disable import/extensions */
import LocalServer from './modules/local-server.js';
import initGetWithJs from './modules/get-with-js.js';
import ValideForm from './modules/valide-form.js';
import CheckAuth from './modules/check-auth.js';
import TooltipsBootstrap from './modules/tooltips.js';
import Register from './modules/register.js';
import Login from './modules/login.js';
import changeBtnLogin from './modules/change-btn-login.js';
import Logout from './modules/logout.js';
import FormatCpf from './modules/format-cpf.js';
import FormatTel from './modules/format-tel.js';
import CurrentLocation from './modules/current-location.js';
import DrawingBoard from './modules/drawing-board.js';

import initSavePost from './modules/save-post.js';
import initPostItems from './modules/post-items.js';
import initFormatPostSchedules from './modules/format-post-schedules.js';
import initCharCount from './modules/char-count.js';
import initBtnCancelContent from './modules/btn-cancel-content.js';
import initBtnTadeuzar from './modules/btn-tadeuzar.js';
import initBtnAddMedia from './modules/btn-add-media.js';
import initDeletePost from './modules/delete-post.js';

// Config server, adicionando as tabelas
const localServer = new LocalServer(['users', 'posts']);
localServer.init(true);

// Pega os parametros GET da URL
initGetWithJs();

// Realiza a verificação de dados dos inputs
const valideForm = new ValideForm('.needs-validation');
valideForm.init();

// Verifica se usuario está logado, mudando as divs a serem mostradas
const checkAuth = new CheckAuth(
  '#unregistered-user',
  '#create-post',
  '#posts',
  'userLogged',
);
checkAuth.init();

// Adiciona as tooltips do bootstrap
const tooltipsBootstrap = new TooltipsBootstrap('[data-bs-toggle="tooltip"]');
tooltipsBootstrap.init();

// Sistema de cadastro
const register = new Register('#form-register', 'users');
register.init();

// Sistema de login
const login = new Login('#form-login');
login.init();

// Sistema de verificação de usuario está logado
// Muda os botões de entrar/criar conta por nome do usuario
changeBtnLogin.init();

// Sistema de logout
const logout = new Logout('#link-logout');
logout.init();

// Formata os inputs especificados
// Formata cpf
const formatCpf = new FormatCpf('#cpf');
formatCpf.init();
// Formata telefone padrão brasileiro
const formatTel = new FormatTel('#tel');
formatTel.init();

// Funcionalidade de permissao da posição atual do usuario
const currentLocation = new CurrentLocation(
  '#btn-add-location',
  '#data-location',
  '#span-location',
);
currentLocation.init();

// Funcionalidade de quadro de desenho
const drawingBoard = new DrawingBoard(
  '#drawingBoard',
  '#btn-add-draw',
  '#option-line-width',
  '#option-line-cap',
  '#option-line-color',
  'btnClear',
  'btnSave',
);
drawingBoard.init();

// Sistema de post
initSavePost();
initPostItems();
initFormatPostSchedules();
initCharCount();
initBtnCancelContent();
initBtnAddMedia();
initBtnTadeuzar();
initDeletePost();
