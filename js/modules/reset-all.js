export default function initResetAll(reset) {
  // Retorna toda pagina index ao estado inicial

  const mainBtnsPosts = document.querySelector('#main-btns-posts');
  const backToOptions = document.querySelector('#back-to-options');
  const divBackToOptions = document.querySelector('#back-to-options');
  const divPostText = document.querySelector('#div-post-text');
  const divPostMidias = document.querySelector('#div-post-midias');
  const divBtnsMidia = document.querySelector('#btns-midia');
  const divsMidiatype = document.querySelectorAll('.div-media-type');
  const divPostLocation = document.querySelector('#div-post-location');

  if (reset && mainBtnsPosts) {

    if (divPostLocation.classList.contains('show'))
      divPostLocation.classList.toggle('show');
    divsMidiatype.forEach(divMediType => {
      if (divMediType.classList.contains('show'))
        divMediType.classList.toggle('show');
    });
    if (divBtnsMidia.classList.contains('show'))
      divBtnsMidia.classList.toggle('show');
    if (divPostMidias.classList.contains('show'))
      divPostMidias.classList.toggle('show');
    if (divPostText.classList.contains('show'))
      divPostText.classList.toggle('show');
    if (divBackToOptions.classList.contains('show'))
      divBackToOptions.classList.toggle('show');
    if (backToOptions.classList.contains('show'))
      backToOptions.classList.toggle('show');
    if (!mainBtnsPosts.classList.contains('show'))
      mainBtnsPosts.classList.toggle('show');

    setTimeout(() => {
      //Verificando se algum elemento não tem d-none, se não tiver adiciona
      if (!divPostLocation.classList.contains('d-none'))
        divPostLocation.classList.toggle('d-none');
      divsMidiatype.forEach(divMediType => {
        if (!divMediType.classList.contains('d-none'))
          divMediType.classList.toggle('d-none');
      });
      if (!divBtnsMidia.classList.contains('d-none'))
        divBtnsMidia.classList.toggle('d-none');
      if (!divPostMidias.classList.contains('d-none'))
        divPostMidias.classList.toggle('d-none');
      if (!divPostText.classList.contains('d-none'))
        divPostText.classList.toggle('d-none');
      if (!divBackToOptions.classList.contains('d-none'))
        divBackToOptions.classList.toggle('d-none');
      if (!backToOptions.classList.contains('d-none'))
        backToOptions.classList.toggle('d-none');
      if (mainBtnsPosts.classList.contains('d-none'))
        mainBtnsPosts.classList.toggle('d-none');
    }, 200);

  }

}

