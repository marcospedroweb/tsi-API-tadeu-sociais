export default function initBtnMidias() {
  // Função responsavel por mostrar o modo de post que o usuario clicou

  const divbtnsMedias = document.querySelector('#btns-midia');

  if (divbtnsMedias) {
    const btnsMedias = divbtnsMedias.querySelectorAll('.btn');

    btnsMedias.forEach(btn => {
      btn.addEventListener('click', event => {
        const btnId = btn.getAttribute('id').replace('btn-media-', '');
        const divMediaType = document.querySelector(`#media-type-${btnId}`);

        // hiddenAllMidiaType();

        if (divbtnsMedias.classList.contains('show'))
          divbtnsMedias.classList.toggle('show');

        if (divMediaType.classList.contains('d-none'))
          divMediaType.classList.toggle('d-none');

        setTimeout(() => {
          if (!divbtnsMedias.classList.contains('d-none'))
            divbtnsMedias.classList.toggle('d-none');

          if (!divMediaType.classList.contains('show'))
            divMediaType.classList.toggle('show');
        }, 200);
      });
    });
  }
}
