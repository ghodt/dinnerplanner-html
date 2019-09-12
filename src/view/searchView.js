class SearchView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
  }

  async render(dishId) {
      this.container.insertAdjacentHTML('beforebegin', header);
      let row = document.createElement('div');
      row.className = "row";
      row.innerHTML = sidebar;
      const searchString = "Baked Brie";
      let dishes = await this.model.getAllDishes("", searchString);
      console.log(dishes);

    var start = /* template */ `

    <div id="dishSearchView" class="container col-sm-9 text-center flex-column row">
        <div id="search-bar" class="col">
          <h2 id="find-dish">Find a dish</h2>
          <form class="" action="" method="post">
            <input type="text" name="search-string" value="Baked brie">
            <select name="dish-type">
              <option value="all">All</option>
              <option value="main-course">Main course</option>
              <option value="side-dish">Side dish</option>
              <option value="dessert">Dessert</option>
              <option value="appetizer">Appetizer</option>
            </select>
            <input id=type="submit" value="Search" class="btn btn-primary">
          </form>
        </div>
        <div id="dishItems" class="col row">`;

        let dish_div = "";
        for(let i = 0; i < dishes.length; i++) {
          dish_div += `<div class="dish">
          <div>
            <img src="https://spoonacular.com/recipeImages/` + dishes[i].image + `">
            </div>
            <span class="value-main-course-name">` + dishes[i].title + `</span>
            </div>`;
        }
        dish_div +=
        `</div>
    </div>
    `;
    row.innerHTML += start + dish_div;
    this.container.innerHTML = "";
    this.container.appendChild(row);
    this.afterRender();
  }

  afterRender() {
  }
}
