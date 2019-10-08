class SearchController {
    constructor(view, model, nav) {
        this.view = view;
        this.model = model;
        this.nav = nav;

        // TODO lab 3
    }

    async renderView() {
      await this.view.render();
      this.addEventListeners();
      let cookieStringValue = document.cookie.replace(/(?:(?:^|.*;\s*)searchString\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      let cookieTypeValue = document.cookie.replace(/(?:(?:^|.*;\s*)searchType\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      this.addDishListeners(dishItems, cookieStringValue, cookieTypeValue);
    }


    addEventListeners() {
      console.log("addEventListeners");
      let searchBtn = this.view.container.querySelector('#submit-btn');
      let searchListener = async function(event) {

        let input = this.view.container.querySelector('#search-input').value;
        let category = this.view.container.querySelector('#drop-down').value;
        if(event.target.id == "submit-btn") {
          document.cookie = 'searchString=' + input;
          document.cookie = 'searchType=' + category;
          this.model.setSearchInput(input, category, true);
        }
        let dishItems = this.view.container.querySelector('#dishItems');
        dishItems.innerHTML = "";
        this.addDishListeners(dishItems, input, category);
      }.bind(this);

      searchBtn.addEventListener('click', searchListener, false);

      // let searchInput = this.view.container.querySelector('#search-input');
      // searchInput.addEventListener('submit', searchListener, false);

      let confirmDinnerBtn = this.view.container.querySelector('#sidebar-button');
      let confirmListener = function(event) {
        console.log("confirm");
      }
      confirmDinnerBtn.addEventListener('click', confirmListener, false);
    }

    async addDishListeners(dishItems, input, category) {
      let dishListener = function(event) {
        let dishId = parseInt(event.target.parentElement.parentElement.id);
        this.nav.renderDetails(dishId);
      }.bind(this);
      //document.cookie='searchString=chocolate;bla=ble';
      let dishes = await this.model.getAllDishes(input, category);
      // console.log(dishItems);

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
        dish.addEventListener('click', dishListener, false);
      }
    }
}
