class PrintoutView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
  }

  render(dishId) {
          this.container.insertAdjacentHTML('beforebegin', header);
  }

  afterRender() {
  }
}
