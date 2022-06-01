export default function initMainBtnsPosts() {
  /*
    Função reponsavel em enconder os botões principais de post, caso o usuario clique em alguma opção.
    Além disso, mostrar as divs relacionadas ao botão clicado.
  */

  const mainBtnsPosts = document.querySelector('#main-btns-posts');
  const btnsPosts = mainBtnsPosts.querySelectorAll('.btn');

  btnsPosts.forEach(btn => {
    btn.addEventListener('click', event => {
      //Variaveis
      const btnId = btn.getAttribute('id').replace('main-btn-', '');
      const divPost = document.querySelector(`#div-post-${btnId}`);
      const divbtnsMedias = divPost.querySelector('#btns-midia');
      const backToOptions = document.querySelector('#back-to-options');
      const btnBackToOptions = backToOptions.querySelector('.btn');

      //Salva o id que devera esconder no botão de voltar
      btnBackToOptions.dataset.hideElement = btnId;

      if (divbtnsMedias)
        if (divbtnsMedias.classList.contains('d-none'))
          divbtnsMedias.classList.toggle('d-none');

      if (divPost.classList.contains('d-none'))
        divPost.classList.toggle('d-none');

      setTimeout(() => {
        if (!divPost.classList.contains('show'))
          divPost.classList.toggle('show');

        if (!mainBtnsPosts.classList.contains('d-none'))
          mainBtnsPosts.classList.toggle('d-none');

        if (divbtnsMedias)
          if (!divbtnsMedias.classList.contains('show'))
            divbtnsMedias.classList.toggle('show');
      }, 200)

      if (mainBtnsPosts.classList.contains('show'))
        mainBtnsPosts.classList.toggle('show');

      if (backToOptions.classList.contains('d-none'))
        backToOptions.classList.toggle('d-none');

    });
  });


}