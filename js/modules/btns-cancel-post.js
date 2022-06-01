import initResetAll from "./reset-all.js";

export default function initBtnsCancelPost() {
  // Ao usuario clicar em qualquer botão cancelar, retornará ao estado que estava antes
  const btnsCancel = document.querySelectorAll('.btn-cancel');
  const divbtnsMedias = document.querySelector('#btns-midia');

  if (btnsCancel)
    btnsCancel.forEach(btnCancel => {
      btnCancel.addEventListener('click', event => {
        const btnDataset = btnCancel.dataset.cancelPost;
        const divMediaType = document.querySelector(`#media-type-${btnDataset}`);
        const divPost = document.querySelector(`#div-post-${btnDataset}`);

        if (divPost)
          initResetAll(true);
        else {
          if (divMediaType.classList.contains('show'))
            divMediaType.classList.toggle('show');

          if (divbtnsMedias.classList.contains('d-none'))
            divbtnsMedias.classList.toggle('d-none');

          setTimeout(() => {

            if (!divMediaType.classList.contains('d-none'))
              divMediaType.classList.toggle('d-none');

            if (!divbtnsMedias.classList.contains('show'))
              divbtnsMedias.classList.toggle('show');

          }, 200);

        }
      });
    });

}
