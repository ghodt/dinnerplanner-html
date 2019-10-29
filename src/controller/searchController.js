class SearchController {
    constructor(view, model, nav) {
        this.view = view;
        this.model = model;
        this.nav = nav;

        // TODO lab 3
    }

    async renderView() {
      let searchQuery = window.localStorage.getItem('searchQuery');
      let searchType = window.localStorage.getItem('searchType');
      console.log(searchQuery);
      console.log(searchType);
      if (searchQuery == null){
        searchQuery = "";
      }
      if (searchType == null){
        searchQuery = "all";
      }
      this.model.setSearchInput(searchQuery, searchType, false);
      await this.view.render(searchQuery, searchType);
      this.addEventListeners();
      this.addDishListeners(dishItems);
    }


    addEventListeners() {
      console.log("addEventListeners");
      let searchBtn = this.view.container.querySelector('#submit-btn');
      let searchListener = async function(event) {
        let query = this.view.container.querySelector('#search-input').value;
        let type = this.view.container.querySelector('#drop-down').value;
        if(event.target.id == "submit-btn") {
          window.localStorage.removeItem('searchQuery');
          window.localStorage.setItem('searchQuery', query);
          window.localStorage.removeItem('searchType');
          window.localStorage.setItem('searchType', type);
          this.model.setSearchInput(query, type, true);
        }
        let dishItems = this.view.container.querySelector('#dishItems');
        dishItems.innerHTML = "";
      }.bind(this);

      searchBtn.addEventListener('click', searchListener, false);

      let confirmDinnerBtn = this.view.container.querySelector('#sidebar-button');
      let confirmListener = function(event) {
        console.log("confirm");
      }
      confirmDinnerBtn.addEventListener('click', confirmListener, false);
    }

    async addDishListeners(dishItems) {
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
