import initAlertUser from "./alert-user.js";
import initSavePost from "./save-post.js";

export default function initBtnTadeuzar() {
  const btnTadeuzar = document.querySelector("#btn-tadeuzar");

  if (btnTadeuzar)
    btnTadeuzar.addEventListener('click', () => {
      const userLogged = JSON.parse(sessionStorage.getItem('userLogged'));
      const tablePosts = JSON.parse(window.localStorage.getItem('posts'));
      const textareaContent = document.querySelector('#post-content-text').value;
      const inputMedia = document.querySelector('#data-media').value;
      const spanMediaType = document.querySelector('#media-type').textContent;
      const inputDraw = document.querySelector('#data-draw').value;
      const inputLocation = document.querySelector('#data-location').value;
      const post = {
        id: tablePosts.length + 1,
        user: userLogged.name,
        date: new Date().getTime()
      }

      if (textareaContent.length == 0 && inputMedia.length == 0 && inputDraw.length == 0 && inputLocation.length == 0) {
        initAlertUser('danger', 'Para realizar o post é necessário adicionar algum conteudo');
        return;
      }

      if (textareaContent.trim() != 0) {
        post.text = true;
        post.textValue = textareaContent;
      }
      if (inputMedia) {
        post.media = true;
        post.mediaType = spanMediaType;
        post.mediaSrc = inputMedia;
      }
      if (inputDraw) {
        post.draw = true;
        post.drawSrc = inputDraw;
      }
      if (inputLocation) {
        post.location = true;
        post.locationSrc = inputLocation;
      }

      initSavePost(post);
    });
}
