import initAlertUser from "./alert-user.js";
import initSavePost from "./save-post.js";

export default function initPost() {
  // Função como toda a funcionalidade de postagem do site

  function createNodeElement(type) {
    // Função será reponsavel por criar o elemento que será armazenado
    let element, source, content;
    let span = document.createElement('span');
    switch (type) {
      case 'text':
        //Criando elementos
        element = document.createElement('p');
        content = document.querySelector(`#post-content-${type}`).value;
        element.textContent = content;
        break;
      case 'image':
        //Criando elementos
        const imgSrc = document.querySelector('#image-src').value;
        if (imgSrc) {
          element = document.createElement('img');
          //Adicionando conteudo e classes
          element.src = imgSrc;
          element.classList.add('img-fluid');
        } else {
          initAlertUser('danger', 'Insira uma imagem para fazer a postagem.');
        }
        break;
      case 'video':
        const videoSrc = document.querySelector('#video-src').value;
        if (videoSrc) {
          //Criando elementos
          element = document.createElement('video');
          source = document.createElement('source');
          //Adicionando conteudo e classes
          span.textContent = 'Seu navegador não suporta video.';
          source.src = videoSrc;
          element.setAttribute('controls', 'controls');
          element.setAttribute('preload', 'none');
          element.classList.add('ratio', 'ratio-16x9');
          element.appendChild(source);
          element.appendChild(span);
        } else {
          initAlertUser('danger', 'Insira uma video para fazer a postagem.');
        }
        break;
      case 'audio':
        const audioSrc = document.querySelector('#audio-src').value;
        if (audioSrc) {
          //Criando elementos
          element = document.createElement('audio');
          source = document.createElement('source');
          //Adicionando conteudo e classes
          span.textContent = 'Seu navegador não suporta audio.';
          source.src = audioSrc;
          element.setAttribute('controls', 'controls');
          element.setAttribute('preload', 'none');
          element.appendChild(source);
          element.appendChild(span)
        } else {
          initAlertUser('danger', 'Insira uma audio para fazer a postagem.');
        }
        break;
      case 'drawing':
        //Criando elementos
        element = document.createElement('img');
        content = document.querySelector('#drawingBoard').toDataURL('image/png', 1);
        //Adicionando conteudo e classes
        element.src = content;
        element.classList.add('img-fluid');
        break;
      case 'location':
        //Criando elementos
        element = document.createElement('iframe');
        content = document.querySelector(`#post-content-${type}`).src;
        //Adicionando conteudo e classes
        element.src = content;
        element.classList.add('ratio', 'ratio-1x1');
        element.setAttribute('width', 500);
        element.setAttribute('height', 500);
        break;
      default:
        console.log('erro');
    }
    return element;
  }

  //Btns de postagem
  const btnsTadeuzar = document.querySelectorAll('.btn-tadeuzar');
  // Inputs de midias
  const inputImage = document.querySelector('#post-content-image');
  const inputVideo = document.querySelector('#post-content-video');
  const inputAudio = document.querySelector('#post-content-audio');

  if (inputImage) {

    btnsTadeuzar.forEach(btnTadeuzar => {
      btnTadeuzar.addEventListener('click', event => {
        // Para cada botão de postar, verifica se há conteudo e posta
        const postType = btnTadeuzar.getAttribute('id').replace('btn-post-', '');
        const element = createNodeElement(postType);
        console.log(element);
        // if (element)
        //   initSavePost(postType, element);
      });
    });

    // Input de imagem
    inputImage.addEventListener('change', eventChange => {
      const inputImageSrc = document.querySelector('#image-src');
      const file = eventChange.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        inputImageSrc.value = event.target.result;
      };
      reader.readAsDataURL(file);
    });

    // Input de video
    inputVideo.addEventListener('change', event => {
      const inputVideoSrc = document.querySelector('#video-src');
      const file = event.target.files[0];
      const blobURL = URL.createObjectURL(file);
      inputVideoSrc.value = blobURL;
    });

    //Input de audio
    inputAudio.addEventListener('change', event => {
      const inputAudioSrc = document.querySelector('#audio-src');
      const file = event.target.files[0];
      const blobURL = URL.createObjectURL(file);
      inputAudioSrc.value = blobURL;
    });

  }
}
