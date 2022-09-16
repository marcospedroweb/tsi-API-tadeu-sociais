/* eslint-disable consistent-return */
const useSessionStorage = (action, key, value = []) => {
  if (['set', 'adicionar', 'add'].includes(action) && key && value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  } else if (['remove', 'remover', 'del'].includes(action) && key) {
    sessionStorage.removeItem(key);
  } else if (['get', 'return', 'retornar'].includes(action) && key) {
    return JSON.parse(sessionStorage.getItem(key));
  }
};

export default useSessionStorage;
