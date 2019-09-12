class HomeView {
  constructor(container) {
    this.container = container;
    this.startBtn = null;
  }

  // An example of creating HTML declaratively. Think about the pros and cons of this approach.
  render() {
    var content = /* template */ `
    <div class="header d-flex align-items-center justify-content-center">
      <h1>Dinner Planner</h1>
    </div>
    <div class="container text-center full-vh d-flex align-items-center justify-content-center flex-column">
        <p class="text-center p-max-width">
          Hi and welcome to this sicc website where you can create dinner menus. Let's begin!
        </p>
        <div class="spacing-medium"></div>
        <button type="button" id="startBtn" class="btn btn-lg btn-primary">
          Create new dinner
        </button>
      </div>
    `;
    this.container.innerHTML = content;
    this.afterRender();
  }

  afterRender() {
    this.startBtn = this.container.getElementsByClassName("#startBtn");
  }
}
