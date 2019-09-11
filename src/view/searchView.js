class SearchView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
  }

  render(dishId) {
    var content = /* template */ `
    <div class="header d-flex align-items-center justify-content-center">
      <h1>Dinner Planner</h1>
    </div>
    <div class="container text-center full-vh d-flex align-items-center justify-content-center flex-column">
        <div id="search-bar">
          <h2>Find a dish</h2>
          <form class="" action="" method="post">
            <input type="text" name="search-string" value="Enter key words">
            <select name="dish-type">
              <option value="all">All</option>
              <option value="main-course">Main course</option>
              <option value="side-dish">Side dish</option>
              <option value="dessert">Dessert</option>
              <option value="appetizer">Appetizer</option>
            </select>
            <input type="submit" value="Search">
          </form>
        </div>
        <div id="search-results"></div>
    </div>
    `;
    this.container.innerHTML = content;
    this.afterRender();
  }

  afterRender() {
  }
}
