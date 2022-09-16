/* eslint-disable consistent-return */
const useLocalStorage = (action, key, value = []) => {
  if (['set', 'adicionar', 'add'].includes(action) && key && value) {
    localStorage.setItem(key, JSON.stringify(value));
  } else if (['remove', 'remover', 'del'].includes(action) && key) {
    localStorage.removeItem(key);
  } else if (['get', 'return', 'retornar'].includes(action) && key) {
    return JSON.parse(localStorage.getItem(key));
  }
};

export default useLocalStorage;
