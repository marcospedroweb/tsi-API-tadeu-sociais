export default function initCharCount() {
  const textAreaPost = document.querySelector('#post-content-text');
  const spanCount = document.querySelector('#char-counter span');

  if (textAreaPost)
    textAreaPost.addEventListener('input', event => {
      const inputValue = event.target.value;
      spanCount.textContent = inputValue.length;
    });
}