class SearchView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
  }

  render(dishId) {
      this.container.insertAdjacentHTML('beforebegin', header);
      let row = document.createElement('div');
      row.className = "row";
      row.innerHTML = sidebar;
    var content = /* template */ `

    <div id="search-container" class="container col-sm-9 text-center full-vh d-flex align-items-center flex-column row">
        <div id="search-bar" class="col">
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
        <div class="w-100"></div>
        <div id="dishItems" class="col">
          <div class="dish">
          <div>
            <img src="images/bakedbrie.jpg">
            </div>
            <span class="value-main-course-name">Baked Brie</span>
          </div>
        </div>
    </div>
    `;
    row.innerHTML += content;
    this.container.innerHTML = "";
    this.container.appendChild(row);
    this.afterRender();
  }

  afterRender() {
  }
}
