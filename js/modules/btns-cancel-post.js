import initReset from "./reset.js";

export default function initBtnsCancelPost() {
  // Ao usuario clicar em qualquer botão cancelar, retornará ao estado que estava antes
  const btnsCancel = document.querySelectorAll('.btn-cancel');

  if (btnsCancel)
    btnsCancel.forEach(btnCancel => {
      btnCancel.addEventListener('click', event => {
        const btnDataset = btnCancel.dataset.cancelPost;
        if (['image', 'video', 'audio', 'drawing'].includes(btnDataset))
          initReset('midia');
        else
          initReset(btnDataset);
      });
    });

}
