import initReset from "./reset.js";

export default function initBtnBackToOptions() {
  const backToOptions = document.querySelector('#back-to-options');

  if (backToOptions) {
    const btnBackToOptions = backToOptions.querySelector('.btn');
    btnBackToOptions.addEventListener('click', event => initReset('all'));
  }
}
