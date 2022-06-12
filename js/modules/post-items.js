import initFormatPostSchedules from "./format-post-schedules.js";

export default function initPostItems() {
  // Cria os posts de acordo com o que está salvo no localStorage

  function createPost(post) {
    //Elemento pai
    const article = document.createElement('article');
    article.classList.add('post', 'col-10', 'col-md-6', 'd-flex', 'flex-column', 'py-4', 'p-2', 'rounded');
    //Elemento com nome do usuario
    const divUsername = document.createElement('div');
    const icon = document.createElement('i');
    const h3 = document.createElement('h3');
    const span = document.createElement('h3');
    divUsername.classList.add('d-flex', 'align-items-center', 'post-header');
    icon.classList.add('bi', 'bi-person-circle', 'me-2');
    h3.classList.add('post-username', 'mb-0', 'me-2', 'h3');
    h3.textContent = post.user;
    span.classList.add('post-time');
    span.textContent = post.date;
    span.dataset.formated = false;
    divUsername.appendChild(icon);
    divUsername.appendChild(h3);
    divUsername.appendChild(span);

    //Elemento com o conteudo da postagem
    const divContent = document.createElement('div');

    if (post.text) {
      const divText = document.createElement('div');
      const divDecorator = document.createElement('div');
      const pContent = document.createElement('p');
      divText.classList.add('bg-post-text', 'position-relative', 'p-2', 'my-2', 'rounded');
      divDecorator.classList.add('block-decorator');
      pContent.classList.add('text-start', 'text-white', 'm-0');
      pContent.textContent = post.textValue;
      divText.appendChild(divDecorator);
      divText.appendChild(pContent);
      divContent.appendChild(divText);
    }
    if (post.media) {
      const divMedia = document.createElement('div');
      if (post.mediaType == '.mp4') {
        const video = document.createElement('video');
        video.classList.add('ratio', 'ratio-16x9');
        video.setAttribute('controls', 'controls');
        video.setAttribute('preload', 'none');
        video.src = post.mediaSrc;
        divMedia.appendChild(video);
      } else if (post.mediaType == 'mpeg') {
        const audio = document.createElement('audio');
        audio.setAttribute('controls', 'controls');
        audio.setAttribute('preload', 'none');
        audio.src = post.mediaType;
        divMedia.appendChild(audio);
      } else {
        const img = document.createElement('img');
        img.classList.add('img-fluid');
        img.src = post.mediaSrc;
        divMedia.appendChild(img);
      }
      divContent.appendChild(divMedia);
    }

    if (post.draw) {
      const divDraw = document.createElement('div');
      const img = document.createElement('img');
      divDraw.classList.add('p-2');
      img.classList.add('img-fluid');
      img.src = post.drawSrc;
      divDraw.appendChild(img);
      divContent.appendChild(divDraw);
    }

    if (post.location) {
      const divLocation = document.createElement('div');
      const iframe = document.createElement('iframe');
      iframe.src = post.locationSrc;
      iframe.classList.add('ratio', 'ratio-1x1');
      if (window.innerWidth < 992)
        iframe.setAttribute('height', 400);
      else
        iframe.setAttribute('height', 500);
      divLocation.appendChild(iframe);
      divContent.appendChild(divLocation);
    }

    article.appendChild(divUsername);
    article.appendChild(divContent);

    return article;
  }

  const divPosts = document.querySelector('#posts');

  if (divPosts) {
    const tablePosts = JSON.parse(window.localStorage.getItem('posts')).reverse();
    const actualPosts = divPosts.querySelectorAll('.post');

    //Removendo posts já existentes
    actualPosts.forEach(post => {
      divPosts.removeChild(post);
    });

    //Adicionando os posts
    tablePosts.forEach(post => {
      const article = createPost(post);
      divPosts.appendChild(article);
    });

    initFormatPostSchedules();
  }
}