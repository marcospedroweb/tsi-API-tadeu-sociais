export default class TooltipsBootstrap {
  constructor(list) {
    this.tooltipTriggerList = document.querySelectorAll(list);
  }

  init() {
    if (this.tooltipTriggerList[0]) {
      [...this.tooltipTriggerList].map(
        // eslint-disable-next-line no-undef
        (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl),
      );
    }
  }
}
