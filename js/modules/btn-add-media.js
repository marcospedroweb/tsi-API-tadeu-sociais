import initAlertUser from './helpers/alert-user.js';

export default function initBtnAddMedia() {
  const btnMedia = document.querySelector('#btn-add-media');
  const inputFile = document.querySelector('#midia-file');
  const spanContent = document.querySelector('#span-media');
  const spanMediaType = document.querySelector('#media-type');
  const inputMedia = document.querySelector('#data-media');

  if (inputFile)
    inputFile.addEventListener('change', (eventChange) => {
      const file = eventChange.target.files[0];
      const fileType = `.${file.type
        .replace('video/', '')
        .replace('image/', '')
        .replace('mpeg/', '')}`;
      const reader = new FileReader();
      reader.onload = function (event) {
        if (
          file.size <= 500000 &&
          ['.mpeg', '.mp4', '.png', '.jpg', '.jpeg'].includes(fileType)
        ) {
          inputMedia.value = event.target.result;

          spanMediaType.textContent = fileType;
          if (spanContent.classList.contains('d-none'))
            spanContent.classList.toggle('d-none');
          if (!btnMedia.classList.contains('disabled'))
            btnMedia.classList.toggle('disabled');

          setTimeout(() => {
            if (!spanContent.classList.contains('show'))
              spanContent.classList.toggle('show');
          }, 250);
        } else {
          inputFile.value = '';
          initAlertUser(
            'danger',
            'O tamanho do arquivo deve ter no maximo 500KB e deve ser do tipo (.mp3, .mp4, .png ou .jpg)',
          );
        }
      };
      reader.readAsDataURL(eventChange.target.files[0]);
    });
}
