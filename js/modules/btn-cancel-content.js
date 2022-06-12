export default function initBtnCancelContent() {
  const spanContent = document.querySelectorAll('.post-content')
  const btnsCancel = document.querySelectorAll('.btn-cancel-content');

  if (btnsCancel[0])
    btnsCancel.forEach(btn => {
      btn.addEventListener('click', event => {
        const contentId = event.target.getAttribute('id').replace('cancel-', '');
        const btnAdd = document.querySelector(`#btn-add-${contentId}`);
        const inputContent = document.querySelector(`#data-${contentId}`);

        inputContent.value = '';
        if (btnAdd.classList.contains('disabled'))
          btnAdd.classList.toggle('disabled');

        spanContent.forEach(span => {
          const spanId = span.getAttribute('id').replace('span-', '');
          if (spanId == contentId) {
            if (span.classList.contains('show'))
              span.classList.toggle('show');

            setTimeout(() => {
              if (!span.classList.contains('d-none'))
                span.classList.toggle('d-none');
            }, 250);
          }
        });
      });
    });
}