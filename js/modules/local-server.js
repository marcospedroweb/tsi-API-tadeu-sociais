export default class LocalServer {
  constructor(tables) {
    // Inicia o "servidor" no window.localStorage
    this.tables = tables;
    this.tables.forEach((table) => {
      if (!window.localStorage.getItem(table))
        window.localStorage.setItem(table, JSON.stringify([]));
    });
  }

  init(reload) {
    if (reload && this.tables)
      this.tables.forEach((table) => {
        const tableData = JSON.parse(window.localStorage.getItem(table));
        if (tableData.length > 0) {
          tableData.forEach((data, index) => {
            // eslint-disable-next-line no-param-reassign
            data.id = index + 1;
          });

          window.localStorage.setItem(table, JSON.stringify(tableData));
        }
      });
  }
}
