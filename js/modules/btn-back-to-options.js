export default function initBtnBackToOptions() {

  const mainBtnsPosts = document.querySelector('#main-btns-posts');
  const backToOptions = document.querySelector('#back-to-options');
  const btnBackToOptions = backToOptions.querySelector('.btn');

  if (btnBackToOptions)
    btnBackToOptions.addEventListener('click', event => {
      const elementToHideId = btnBackToOptions.dataset.hideElement;
      const elementToHideDiv = document.querySelector(`#div-post-${elementToHideId}`);


      //Volta tudo ao padrão ao postar
      if (mainBtnsPosts.classList.contains('d-none'))
        mainBtnsPosts.classList.toggle('d-none');

      if (!backToOptions.classList.contains('d-none'))
        backToOptions.classList.toggle('d-none');

      if (elementToHideDiv.classList.contains('show'))
        elementToHideDiv.classList.toggle('show');

      setTimeout(() => {
        if (!elementToHideDiv.classList.contains('d-none'))
          elementToHideDiv.classList.toggle('d-none');

        if (!mainBtnsPosts.classList.contains('show'))
          mainBtnsPosts.classList.toggle('show');
      }, 200)

    });

}
