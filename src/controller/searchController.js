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
      this.addDishListeners(dishItems);
    }


    addEventListeners() {
      console.log("addEventListeners");
      let searchBtn = this.view.container.querySelector('#submit-btn');
      let searchListener = async function(event) {

        let input = this.view.container.querySelector('#search-input').value;
        let category = this.view.container.querySelector('#drop-down').value;
        if(event.target.id == "submit-btn") {
          this.model.setSearchInput(input, category, true);
        }
        let dishItems = this.view.container.querySelector('#dishItems');
        dishItems.innerHTML = "";
        this.addDishListeners(dishItems, input, category);
      }.bind(this);

      searchBtn.addEventListener('click', searchListener, false);

      let confirmDinnerBtn = this.view.container.querySelector('#sidebar-button');
      let confirmListener = function(event) {
        console.log("confirm");
      }
      confirmDinnerBtn.addEventListener('click', confirmListener, false);
    }

    async addDishListeners(dishItems, input, category) {
      console.log("addDishListeners")
      let dishListener = function(event) {
        let target = null;
        console.log(event.target.parentNode.parentNode.className);
        if(event.target.parentNode.parentNode.className == "dish") {
          target = event.target.parentNode.parentNode;
        }
        else if(event.target.parentNode.className.includes("dish")) {
          target = event.target.parentNode;
        }
        let dishId = parseInt(target.id);
        if(dishId != null) {
          this.nav.navigate(dishId);
        }
      }.bind(this);
        let dishDiv = this.view.container.querySelector('#dishItems');
        dishDiv.addEventListener('click', dishListener, false);
    }
}
