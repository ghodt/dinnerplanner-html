

class SearchView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.templates = new Templates(this.model, this.container);
  }

  async render() {
    console.log("render search view");
    this.container.insertAdjacentHTML('afterbegin', this.templates.header);

    const loader = document.createElement('div');
    loader.id = "loader";
    loader.className = "spinner-border";
    loader.role = "status";
    loader.innerHTML = '<span class="sr-only">Loading...</span>';
    this.container.appendChild(loader);

    let content = this.container.querySelector('#totalRow');
    this.container.appendChild(content);
    this.templates.addDishesToSidebar();

    let dishView = document.createElement('div');
    dishView.id = "dishSearchView";
    dishView.className = "text-center col-sm-9 row";

    let searchbar = document.createElement('div');
    searchbar.id = "search-bar";
    document.cookie = 'searchString=chocolate';
    let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)searchString\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    let searchbarHTML = `<h2 id="find-dish">Find a dish</h2>
    <form class="" action="" method="post">
      <input id="search-input" type="text" name="search-string" value="` + cookieValue + `">
      <select id="drop-down" name="dish-type">
        <option value="all">All</option>
        <option value="main-course">Main course</option>
        <option value="side-dish">Side dish</option>
        <option value="dessert">Dessert</option>
        <option value="appetizer">Appetizer</option>
      </select>
      <button id="submit-btn" type="button" value="Search" class="btn btn-primary">Search</button>
    </form>`;
    searchbar.innerHTML = searchbarHTML;
    content.appendChild(dishView);

    let dishItems = document.createElement('div');
    dishItems.id = "dishItems";
    dishItems.className = "col row";
    this.model.setSearchInput(cookieValue);
    //await this.addDishes(dishItems);
     dishView.appendChild(searchbar);
     dishView.appendChild(dishItems);

    await this.afterRender();
  }

  async addDishes(dishItems) {
    let searchInput = this.model.getSearchInput().split("  ");
    console.log("type: " + searchInput[1]);
    console.log("query: " + searchInput[0]);
    document.cookie='searchString=chocolate;bla=ble';
    let dishes = await this.model.getAllDishes(searchInput[1], searchInput[0]);

    for(let i = 0; i < dishes.length; i++) {
      let dish = document.createElement('div');
      dish.className = "dish";
      dish.id = dishes[i].id;
      let dishContent = document.createElement('div');
      let img = document.createElement('img');
      img.src = "https://spoonacular.com/recipeImages/" + dishes[i].image;
      dishContent.id = "result-images";
      dishContent.appendChild(img);
      dish.appendChild(dishContent);

      let title = document.createElement('span');
      title.className = "value-main-course-name";
      title.innerHTML = dishes[i].title;
      dish.appendChild(title)

      dishItems.appendChild(dish);
    }
  }


  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async afterRender() {
    this.model.addObserver(this);
    this.container.removeChild(loader);
//    await this.sleep(1000);
//    await this.model.addDishToMenu(2);
//    await this.update(this.model, this.model.getFullMenu);
//    this.model.setSearchInput("chocolate");
//    await this.update(this.model, this.model.getSearchInput);


  }

  async update(model, changeDetails) {
    console.log("update: " + changeDetails);
    if(changeDetails == model.getFullMenu) {
      this.container.querySelector('#sidebar-selected-dishes').innerHTML = "";
      this.templates.addDishesToSidebar();
    }
    if(changeDetails == model.getSearchInput) {
      console.log("seeearch");

      let dishItems = this.container.querySelector('#dishItems');

      dishItems.innerHTML = "";
      // append loader
    //  await this.addDishes(dishItems);




    }
  }
}
