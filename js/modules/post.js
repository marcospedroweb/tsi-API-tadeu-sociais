export default function initPost() {

}

function createPost(type) {
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
      // Vai ter que pegar o preview do src para isso funcionar
      element = document.createElement('img');
      content = document.querySelector(`#post-content-${type}`).value.replace(/[\\"]/g, '');
      content = content.replace('C:fakepath', '');
      //Adicionando conteudo e classes
      element.src = content;
      element.classList.add('img-fluid');
      break;
    case 'video':
      //Criando elementos
      element = document.createElement('video');
      source = document.createElement('source');
      content = document.querySelector(`#post-content-${type}`).value;
      //Adicionando conteudo e classes
      source.src = content;
      element.setAttribute('controls');
      element.appendChild(source);
      element.classList.add('ratio', 'ratio-16x9');
      break;
    case 'audio':
      //Criando elementos
      element = document.createElement('audio');
      source = document.createElement('source');
      content = document.querySelector(`#post-content-${type}`).value;
      //Adicionando conteudo e classes
      source.src = content;
      element.setAttribute('controls');
      element.appendChild(source);
      break;
    case 'drawing':
      //Criando elementos
      element = document.createElement('img');
      content = document.querySelector('#drawingBoard').toDataURL('image/jpeg', 0.5);
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
const postDiv = document.querySelector('#post-test');

if (btnsTadeuzar && postDiv)
  btnsTadeuzar.forEach(btnTadeuzar => {
    btnTadeuzar.addEventListener('click', event => {
      const postType = btnTadeuzar.getAttribute('id').replace('btn-post-', '');
      const element = createPost(postType);
      const divPosts = document.querySelector('#post-test');
      divPosts.appendChild(element);
    });
  });
