

class SearchView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
  }

  async render() {
    console.log(this.model.getTotalMenuPrice());
    const templates = new Templates(this.model, this.container);
    this.container.insertAdjacentHTML('afterbegin', templates.header);

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
    sideBar.innerHTML = templates.sidebar;
    sideBar.querySelector('#sidebar-total-price').innerHTML = 'SEK <span class="value-total-price">' + this.model.getTotalMenuPrice();
    content.appendChild(sideBar);
    this.container.appendChild(content);
    templates.addDishesToSidebar();

    let dishView = document.createElement('div');
    dishView.id = "dishSearchView";
    dishView.className = "container col-sm-9 text-center flex-column row";

    let searchbar = document.createElement('div');
    searchbar.id = "search-bar";
    searchbar.className = "col";
    let searchbarHTML = `<h2 id="find-dish">Find a dish</h2>
    <form class="" action="" method="post">
      <input type="text" name="search-string" value="">
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
     const searchString = "Breakfast Pizza";
     let dishes = await this.model.getAllDishes("", searchString);

     for(let i = 0; i < dishes.length; i++) {
       let dish = document.createElement('div');
       dish.className = "dish";
       let dishContent = document.createElement('div');
       let img = document.createElement('img');
       img.src = "https://spoonacular.com/recipeImages/" + dishes[i].image;
       console.log(dishes[i].image);
       dishContent.id = "result-images";
       dishContent.appendChild(img);
       dish.appendChild(dishContent);

       let title = document.createElement('span');
       title.className = "value-main-course-name";
       title.innerHTML = dishes[i].title;
       console.log(dishes[i]);
       dish.appendChild(title)

       dishItems.appendChild(dish);
     }
     dishView.appendChild(searchbar);
     dishView.appendChild(dishItems);

    this.afterRender();
  }

  afterRender() {
    this.container.removeChild(loader);
  }
}
