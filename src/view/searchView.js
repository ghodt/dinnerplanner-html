

class SearchView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.model.addObserver(this);
    this.templates = new Templates(this.model, this.container);
  }

  async render() {
    this.container.insertAdjacentHTML('afterbegin', this.templates.header);

    const loader = document.createElement('div');
    loader.id = "loader";
    loader.className = "spinner-border";
    loader.role = "status";
    loader.innerHTML = '<span class="sr-only">Loading...</span>';
    this.container.appendChild(loader);

    let content = document.createElement('div');
    content.id = "content";
    content.className = "container row col-sm-12";

    let sideBar = document.createElement('div');
    sideBar.id = "sideBarView";
    sideBar.className = "container col-sm-3";
    sideBar.innerHTML = this.templates.sidebar;
  //  sideBar.querySelector('#sidebar-total-price').innerHTML = 'SEK <span class="value-total-price">' + this.model.getTotalMenuPrice();
    content.appendChild(sideBar);
    this.container.appendChild(content);
    this.templates.addDishesToSidebar();

    let dishView = document.createElement('div');
    dishView.id = "dishSearchView";
    dishView.className = "text-center col-sm-9 row";

    let searchbar = document.createElement('div');
    searchbar.id = "search-bar";
    let searchbarHTML = `<h2 id="find-dish">Find a dish</h2>
    <form class="" action="" method="post">
      <input id="search-input" type="text" name="search-string" value="">
      <select name="dish-type">
        <option value="all">All</option>
        <option value="main-course">Main course</option>
        <option value="side-dish">Side dish</option>
        <option value="dessert">Dessert</option>
        <option value="appetizer">Appetizer</option>
      </select>
      <button id=type="submit" value="Search" class="btn btn-primary">Search</button>
    </form>`;
    searchbar.innerHTML = searchbarHTML;
    content.appendChild(dishView);

    let dishItems = document.createElement('div');
    dishItems.id = "dishItems";
    dishItems.className = "col row";
    this.model.setSearchString("Breakfast Pizza");
    await this.addDishes(dishItems);
     dishView.appendChild(searchbar);
     dishView.appendChild(dishItems);

    await this.afterRender();
  }

  async addDishes(dishItems) {
    let dishes = await this.model.getAllDishes("", this.model.getSearchString());

    for(let i = 0; i < dishes.length; i++) {
      let dish = document.createElement('div');
      dish.className = "dish";
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
    this.container.removeChild(loader);
    await this.sleep(4000);
    await this.model.addDishToMenu(2);
    await this.update(this.model, this.model.getFullMenu);
    this.model.setSearchString("chocolate");
    await this.update(this.model, this.model.getSearchString);


  }

  async update(model, changeDetails) {
    console.log("update: " + changeDetails);
    if(changeDetails == model.getFullMenu) {
      this.container.querySelector('#sidebar-selected-dishes').innerHTML = "";
      this.templates.addDishesToSidebar();
    }
    if(changeDetails == model.getSearchString) {
      console.log("seeearch");
      let dishItems = this.container.querySelector('#dishItems');
      dishItems.innerHTML = "";
      // append loader
      await this.addDishes(dishItems);


    }
  }
}
