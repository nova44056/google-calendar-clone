export class Modal {
  private show: boolean = false;

  constructor() {}

  showModal() {
    this.show = true;
  }

  hideModal() {
    this.show = false;
  }
}
