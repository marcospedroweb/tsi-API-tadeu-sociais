/* eslint-disable no-param-reassign */
import useLocalStorage from './helpers/use-local-storage.js';

export default class LocalServer {
  constructor(tables = []) {
    // Inicia o "servidor" no window.localStorage
    this.tables = tables;
    this.tables.forEach((table) => {
      if (!useLocalStorage('get', table)) useLocalStorage('set', table, []);
    });
  }

  init(reload) {
    if (reload && this.tables) {
      this.tables.forEach((table) => {
        const tableData = useLocalStorage('get', table);
        if (tableData.length > 0) {
          tableData.forEach((data, index) => {
            data.id = index + 1;
          });

          useLocalStorage('set', table, tableData);
        }
      });
    }
  }
}
