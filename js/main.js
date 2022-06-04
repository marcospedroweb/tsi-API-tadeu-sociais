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
import initMainBtnsPosts from "./modules/main-btns-posts.js";
import initBtnBackToOptions from "./modules/btn-back-to-options.js";
import initBtnMidias from "./modules/btns-midias.js";
import initBtnsCancelPost from "./modules/btns-cancel-post.js";
import initResetAll from "./modules/reset-all.js";
import initPost from "./modules/post.js";
import initSavePost from "./modules/save-post.js";

// Config basico e interface
initServer();
initGetWithJs();
initAlertUser();
initValideForm();
// Sistema de login
initRegister();
initLogin();
// Sistema de verificação de usuario está logado
initChangeBtnLogin();
initLogout();
//Sistema para resetar toda a pagina de posts
initResetAll();
// Esconder e aparecer tipos posts por meio dos botões
initCurrentLocation();
initDrawingBoard();
initMainBtnsPosts();
initBtnBackToOptions();
initBtnMidias();
initBtnsCancelPost();
//Sistema de post
initSavePost();
initPost();