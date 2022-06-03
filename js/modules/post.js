export default function initPost() {
  // Função como toda a funcionalidade de postagem do site
}

function createPost(type, contentFile) {
  // Função será reponsavel por criar o elemento que será armazenado
  let element, source, content;
  switch (type) {
    case 'text':
      //Criando elementos
      element = document.createElement('p');
      content = document.querySelector(`#post-content-${type}`).value;
      element.textContent = content;
      break;
    case 'image':
      //Criando elementos
      element = document.createElement('img');
      //Adicionando conteudo e classes
      element.src = contentFile;
      element.classList.add('img-fluid');
      break;
    case 'video':
      //Criando elementos
      element = document.createElement('video');
      source = document.createElement('source');
      //Adicionando conteudo e classes
      source.src = contentFile;
      element.setAttribute('controls', 'controls');
      element.setAttribute('preload', 'none');
      element.appendChild(source);
      element.classList.add('ratio', 'ratio-16x9');
      break;
    case 'audio':
      //Criando elementos
      element = document.createElement('audio');
      source = document.createElement('source');
      //Adicionando conteudo e classes
      source.src = contentFile;
      element.setAttribute('controls', 'controls');
      element.setAttribute('preload', 'none');
      element.appendChild(source);
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

const btnsTadeuzar = document.querySelectorAll('.btn-tadeuzar');
// Inputs de midias
const inputImage = document.querySelector('#post-content-image');
const inputVideo = document.querySelector('#post-content-video');
const inputAudio = document.querySelector('#post-content-audio');

//Btns de postagem
if (btnsTadeuzar)
  btnsTadeuzar.forEach(btnTadeuzar => {
    btnTadeuzar.addEventListener('click', event => {
      // Para cada botão de postar, verifica se há conteudo e posta
      let element;
      const postType = btnTadeuzar.getAttribute('id').replace('btn-post-', '');
      if (postType != 'video' && postType != 'audio')
        element = createPost(postType);
    });
  });

// Input de imagem
inputImage.addEventListener('change', eventChange => {
  const imagePreview = document.querySelector('#image-preview');
  const file = eventChange.target.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    imagePreview.src = event.target.result;
  };
  reader.readAsDataURL(file);
});

// Input de video
inputVideo.addEventListener('change', event => {
  const file = event.target.files[0];
  const blobURL = URL.createObjectURL(file);
  //Criando elementos
  const element = createPost('video', blobURL);
});

//Input de audio
inputAudio.addEventListener('change', event => {
  const file = event.target.files[0];
  const blobURL = URL.createObjectURL(file);
  //Criando elementos
  const element = createPost('audio', blobURL);
});
