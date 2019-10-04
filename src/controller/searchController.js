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
      let searchBtn = this.view.container.querySelector('#submit-btn');
      let searchListener = function(event) {
        let input = this.view.container.querySelector('#search-input').value;
        let category = this.view.container.querySelector('#drop-down').value;
        this.model.setSearchInput(input, category);
      }.bind(this);
      searchBtn.addEventListener('click', searchListener, false);

      let confirmDinnerBtn = this.view.container.querySelector('#sidebar-button');
      let confirmListener = function(event) {
        console.log("confirm");
      }
      confirmDinnerBtn.addEventListener('click', confirmListener, false);

      let dishes = this.view.container.getElementsByClassName("dish");
      let dishListener = function(event) {
        let dishId = parseInt(event.target.parentElement.parentElement.id);
        this.nav.getDishDetails(dishId);
        console.log(dishId);
      }.bind(this);
      for(let i = 0; i < dishes.length; i++) {
        dishes[i].addEventListener('click', dishListener, false);
      }


    }

}
