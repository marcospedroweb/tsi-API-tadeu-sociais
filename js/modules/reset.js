export default function initReset(section) {
  // Retorna toda pagina index ao estado inicial
  const divMainBtnsPosts = document.querySelector('#main-btns-posts');

  function resetElements(section) {
    //Section location
    const divPostLocation = document.querySelector('#div-post-location');
    const iframe = document.querySelector('#post-content-location');
    //Section midias
    const divPostMidias = document.querySelector('#div-post-midias');
    const divBtnsMidia = document.querySelector('#btns-midia');
    const divsMidiatype = document.querySelectorAll('.div-media-type');
    const inputImage = document.querySelector('#post-content-image');
    const imageSrc = document.querySelector('#image-src');
    const inputVideo = document.querySelector('#post-content-video');
    const videoSrc = document.querySelector('#video-src');
    const inputAudio = document.querySelector('#post-content-audio');
    const audioSrc = document.querySelector('#audio-src');
    const canvas = document.querySelector('#drawingBoard');
    const ctx = canvas.getContext('2d');
    //Section text
    const divPostText = document.querySelector('#div-post-text');
    const textArea = document.querySelector('#post-content-text');
    //Geral
    const backToOptions = document.querySelector('#back-to-options');
    const divBackToOptions = document.querySelector('#back-to-options');

    switch (section) {
      case 'all':
        //Section location
        if (divPostLocation.classList.contains('show'))
          divPostLocation.classList.toggle('show');
        divsMidiatype.forEach(divMediaType => {
          if (divMediaType.classList.contains('show'))
            divMediaType.classList.toggle('show');
        });
        iframe.src = "https://embed.waze.com/iframe?zoom=13&lat=48.85661&lon=2.35222&pin=1";
        //Section midias
        divsMidiatype.forEach(divMediaType => {
          if (divMediaType.classList.contains('show'))
            divMediaType.classList.toggle('show');
        });
        if (divBtnsMidia.classList.contains('show'))
          divBtnsMidia.classList.toggle('show');
        if (divPostMidias.classList.contains('show'))
          divPostMidias.classList.toggle('show');
        inputImage.value = '';
        imageSrc.value = '';
        inputVideo.value = '';
        videoSrc.value = '';
        inputAudio.value = '';
        audioSrc.value = '';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //Section text
        if (divPostText.classList.contains('show'))
          divPostText.classList.toggle('show');
        textArea.value = '';
        //Geral
        if (divBackToOptions.classList.contains('show'))
          divBackToOptions.classList.toggle('show');
        if (backToOptions.classList.contains('show'))
          backToOptions.classList.toggle('show');
        if (!divMainBtnsPosts.classList.contains('show'))
          divMainBtnsPosts.classList.toggle('show');

        setTimeout(() => {
          //Verificando se algum elemento não tem d-none, se não tiver adiciona
          //Section location
          if (!divPostLocation.classList.contains('d-none'))
            divPostLocation.classList.toggle('d-none');
          //Section midias
          divsMidiatype.forEach(divMediaType => {
            if (!divMediaType.classList.contains('d-none'))
              divMediaType.classList.toggle('d-none');
          });
          if (!divBtnsMidia.classList.contains('d-none'))
            divBtnsMidia.classList.toggle('d-none');
          if (!divPostMidias.classList.contains('d-none'))
            divPostMidias.classList.toggle('d-none');
          //Section text
          if (!divPostText.classList.contains('d-none'))
            divPostText.classList.toggle('d-none');
          //Geral
          if (!divBackToOptions.classList.contains('d-none'))
            divBackToOptions.classList.toggle('d-none');
          if (!backToOptions.classList.contains('d-none'))
            backToOptions.classList.toggle('d-none');
          if (divMainBtnsPosts.classList.contains('d-none'))
            divMainBtnsPosts.classList.toggle('d-none');
        }, 200);
        break;
      case 'text':
        //Section text
        if (divPostText.classList.contains('show'))
          divPostText.classList.toggle('show');
        textArea.value = '';
        //Geral
        if (divBackToOptions.classList.contains('show'))
          divBackToOptions.classList.toggle('show');
        if (backToOptions.classList.contains('show'))
          backToOptions.classList.toggle('show');
        if (!divMainBtnsPosts.classList.contains('show'))
          divMainBtnsPosts.classList.toggle('show');
        setTimeout(() => {
          if (!divPostText.classList.contains('d-none'))
            divPostText.classList.toggle('d-none');
          //Geral
          if (!divBackToOptions.classList.contains('d-none'))
            divBackToOptions.classList.toggle('d-none');
          if (!backToOptions.classList.contains('d-none'))
            backToOptions.classList.toggle('d-none');
          if (divMainBtnsPosts.classList.contains('d-none'))
            divMainBtnsPosts.classList.toggle('d-none');
        }, 200);
        break;
      case 'midia':
        //Section midias
        divsMidiatype.forEach(divMediaType => {
          if (divMediaType.classList.contains('show'))
            divMediaType.classList.toggle('show');
        });
        if (divBtnsMidia.classList.contains('d-none'))
          divBtnsMidia.classList.toggle('d-none');
        if (divPostMidias.classList.contains('d-none'))
          divPostMidias.classList.toggle('d-none');
        inputImage.value = '';
        imageSrc.value = '';
        inputVideo.value = '';
        videoSrc.value = '';
        inputAudio.value = '';
        audioSrc.value = '';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setTimeout(() => {
          //Section midias
          divsMidiatype.forEach(divMediaType => {
            if (!divMediaType.classList.contains('d-none'))
              divMediaType.classList.toggle('d-none');
          });
          if (!divBtnsMidia.classList.contains('show'))
            divBtnsMidia.classList.toggle('show');
          if (!divPostMidias.classList.contains('show'))
            divPostMidias.classList.toggle('show');
        }, 200);
        break;
      case 'location':
        //Section location
        if (divPostLocation.classList.contains('show'))
          divPostLocation.classList.toggle('show');
        divsMidiatype.forEach(divMediaType => {
          if (divMediaType.classList.contains('show'))
            divMediaType.classList.toggle('show');
        });
        iframe.src = "https://embed.waze.com/iframe?zoom=13&lat=48.85661&lon=2.35222&pin=1";
        setTimeout(() => {
          //Section location
          if (!divPostLocation.classList.contains('d-none'))
            divPostLocation.classList.toggle('d-none');
          //Geral
          if (!divBackToOptions.classList.contains('d-none'))
            divBackToOptions.classList.toggle('d-none');
          if (!backToOptions.classList.contains('d-none'))
            backToOptions.classList.toggle('d-none');
          if (divMainBtnsPosts.classList.contains('d-none'))
            divMainBtnsPosts.classList.toggle('d-none');
        }, 200);
        break;
      default:
        console.log('erro');
    }
  }

  if (section && divMainBtnsPosts)
    resetElements(section);

}

