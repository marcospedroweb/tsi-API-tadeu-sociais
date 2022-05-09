export default function initServer() {
  if (!localStorage.getItem('users')) {
    const users = {
      "id": 0,
      "registeredUsers": [],
    };
    localStorage.setItem('users', JSON.stringify(users));
  }
}
