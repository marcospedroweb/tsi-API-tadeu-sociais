export default function initCheckAuth() {
  const divUnregisteredUser = document.querySelector('#unregistered-user');
  const divCreatePost = document.querySelector('#create-post');
  const divPosts = document.querySelector('#posts');
  const userLogged = JSON.parse(sessionStorage.getItem('userLogged'));

  if (divUnregisteredUser)
    if (userLogged) {
      if (!divUnregisteredUser.classList.contains('d-none'))
        divUnregisteredUser.classList.toggle('d-none');
      if (divCreatePost.classList.contains('d-none'))
        divCreatePost.classList.toggle('d-none');
      if (divPosts.classList.contains('d-none'))
        divPosts.classList.toggle('d-none');
    }
}