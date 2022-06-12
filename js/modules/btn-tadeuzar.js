import initAlertUser from "./alert-user.js";
import initSavePost from "./save-post.js";

export default function initBtnTadeuzar() {
  const btnTadeuzar = document.querySelector("#btn-tadeuzar");

  if (btnTadeuzar)
    btnTadeuzar.addEventListener('click', () => {
      const userLogged = JSON.parse(sessionStorage.getItem('userLogged'));
      const tablePosts = JSON.parse(window.localStorage.getItem('posts'));
      const textareaContent = document.querySelector('#post-content-text');
      const inputMedia = document.querySelector('#data-media');
      const spanMediaType = document.querySelector('#media-type');
      const inputDraw = document.querySelector('#data-draw');
      const inputLocation = document.querySelector('#data-location');
      const post = {
        id: tablePosts.length + 1,
        user: userLogged.name,
        date: new Date().getTime()
      }

      if (textareaContent.value.length == 0 && inputMedia.length == 0 && inputDraw.length == 0 && inputLocation.length == 0) {
        initAlertUser('danger', 'Para realizar o post é necessário adicionar algum conteudo');
        return;
      }

      if (textareaContent.value.trim() != 0) {
        post.text = true;
        post.textValue = textareaContent.value;
      }
      if (inputMedia.value) {
        post.media = true;
        post.mediaType = spanMediaType.textContent;
        post.mediaSrc = inputMedia.value;
      }
      if (inputDraw.value) {
        post.draw = true;
        post.drawSrc = inputDraw.value;
      }
      if (inputLocation.value) {
        post.location = true;
        post.locationSrc = inputLocation.value;
      }

      initSavePost(post);

      function clearCreatePost() {
        const btnLocation = document.querySelector('#btn-add-location');
        const spanLocation = document.querySelector('#span-location');
        const btnDraw = document.querySelector('#btn-add-draw');
        const spanDraw = document.querySelector('#span-draw');
        const btnMedia = document.querySelector('#btn-add-media');
        const spanMedia = document.querySelector('#span-media');

        textareaContent.value = '';
        inputMedia.value = '';
        spanMediaType.textContent = '';
        inputDraw.value = '';
        inputLocation.value = '';
        if (btnLocation.classList.contains('disabled'))
          btnLocation.classList.toggle('disabled');
        if (spanLocation.classList.contains('show'))
          spanLocation.classList.toggle('show');
        if (btnDraw.classList.contains('disabled'))
          btnDraw.classList.toggle('disabled');
        if (spanDraw.classList.contains('show'))
          spanDraw.classList.toggle('show');
        if (btnMedia.classList.contains('disabled'))
          btnMedia.classList.toggle('disabled');
        if (spanMedia.classList.contains('show'))
          spanMedia.classList.toggle('show');

        setTimeout(() => {
          if (!spanLocation.classList.contains('d-none'))
            spanLocation.classList.toggle('d-none');
          if (!spanDraw.classList.contains('d-none'))
            spanDraw.classList.toggle('d-none');
          if (!spanMedia.classList.contains('d-none'))
            spanMedia.classList.toggle('d-none');
        }, 250);

      }

      clearCreatePost();
    });
}
