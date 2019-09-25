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
    }


    addEventListeners() {
      let container = this.view.container;
      let model = this.model;
      let nav = this.nav;

      let searchBtn = this.view.container.querySelector('#submit-btn');
      let searchListener = function(event) {
        let input = container.querySelector('#search-input').value;
        let category = container.querySelector('#drop-down').value;
        model.setSearchInput(input, category);
      }
      searchBtn.addEventListener('click', searchListener, false);

      let confirmDinnerBtn = this.view.container.querySelector('#sidebar-button');
      let confirmListener = function(event) {
        console.log("confirm");
      }
      confirmDinnerBtn.addEventListener('click', confirmListener, false);

      let dishes = container.getElementsByClassName("dish");
      let dishListener = function(event) {
        let dishId = parseInt(event.target.parentElement.parentElement.id);
        nav.getDishDetails(dishId);
        console.log(dishId);
      }
      for(let i = 0; i < dishes.length; i++) {
        dishes[i].addEventListener('click', dishListener, false);
      }


    }

}
