import initAlertUser from "./modules/alert-user.js";
import initChangeBtnLogin from "./modules/change-btn-login.js";
import initCurrentLocation from "./modules/current-location.js";
import initGetWithJs from "./modules/get-with-js.js";
import initLogin from "./modules/login.js";
import initLogout from "./modules/logout.js";
import initRegister from "./modules/register.js";
import initServer from "./modules/server.js";
import initValideForm from "./modules/valide-form.js";
import initDrawingBoard from "./modules/drawing-board.js";
import initSavePost from "./modules/save-post.js";
import initCheckAuth from "./modules/check-auth.js";
import initCheckCpf from "./modules/check-cpf.js";
import initCheckTel from "./modules/check-tel.js";
import initTooltips from "./modules/tooltips.js";
import initPostItems from "./modules/post-items.js";
import initFormatPostSchedules from "./modules/format-post-schedules.js";
import initCharCount from "./modules/char-count.js";
import initBtnCancelContent from "./modules/btn-cancel-content.js";
import initBtnTadeuzar from "./modules/btn-tadeuzar.js";
import initBtnAddMedia from "./modules/btn-add-media.js";

// Config basico e interface
initServer();
initGetWithJs();
initAlertUser();
initValideForm();
initCheckAuth();
initTooltips();
// Sistema de login
initRegister();
initLogin();
// Sistema de verificação de usuario está logado
initChangeBtnLogin();
initLogout();
// Esconder e aparecer tipos posts por meio dos botões
initCheckCpf();
initCheckTel();
initCurrentLocation();
initDrawingBoard();
//Sistema de post
initSavePost();
initPostItems();
initFormatPostSchedules();
initCharCount();
initBtnCancelContent();
initBtnAddMedia();
initBtnTadeuzar();
