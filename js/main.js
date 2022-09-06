/* eslint-disable import/extensions */
import LocalServer from './modules/local-server.js';
import initGetWithJs from './modules/get-with-js.js';
import ValideForm from './modules/valide-form.js';
import Login from './modules/login.js';

import initChangeBtnLogin from './modules/change-btn-login.js';
import initCurrentLocation from './modules/current-location.js';
import initLogin from './modules/login.js';
import initLogout from './modules/logout.js';
import initRegister from './modules/register.js';
import initDrawingBoard from './modules/drawing-board.js';
import initSavePost from './modules/save-post.js';
import initCheckAuth from './modules/check-auth.js';
import initCheckCpf from './modules/check-cpf.js';
import initCheckTel from './modules/check-tel.js';
import initTooltips from './modules/tooltips.js';
import initPostItems from './modules/post-items.js';
import initFormatPostSchedules from './modules/format-post-schedules.js';
import initCharCount from './modules/char-count.js';
import initBtnCancelContent from './modules/btn-cancel-content.js';
import initBtnTadeuzar from './modules/btn-tadeuzar.js';
import initBtnAddMedia from './modules/btn-add-media.js';
import initDeletePost from './modules/delete-post.js';
import CheckAuth from './modules/check-auth.js';
import TooltipsBootstrap from './modules/tooltips.js';
import Register from './modules/register.js';

// Config basico e interface
const localServer = new LocalServer(['users', 'posts']);
localServer.init(true);

initGetWithJs();

const valideForm = new ValideForm('.needs-validation');
valideForm.init();

const checkAuth = new CheckAuth(
  '#unregistered-user',
  '#create-post',
  '#posts',
  'userLogged',
);
checkAuth.init();

const tooltipsBootstrap = new TooltipsBootstrap('[data-bs-toggle="tooltip"]');
tooltipsBootstrap.init();

// Sistema de cadastro
const register = new Register('#form-register', 'users');
register.init();

// Sistema de login
const login = new Login('#form-login');
login.init();

// Sistema de verificação de usuario está logado
initChangeBtnLogin();
initLogout();
// Esconder e aparecer tipos posts por meio dos botões
initCheckCpf();
initCheckTel();
initCurrentLocation();
initDrawingBoard();
// Sistema de post
initSavePost();
initPostItems();
initFormatPostSchedules();
initCharCount();
initBtnCancelContent();
initBtnAddMedia();
initBtnTadeuzar();
initDeletePost();
