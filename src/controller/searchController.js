class SearchController {
    constructor(view, model) {
        this.view = view;
        this.model = model;

        // TODO lab 3
    }


    async renderView() {
      await this.view.render();
      this.addEventListeners();
    }


    addEventListeners() {
      let container = this.view.container;
      let model = this.model;

      let searchBtn = this.view.container.querySelector('#submit-btn');
      let searchListener = function(event) {
        let input = container.querySelector('#search-input').value;
        let category = container.querySelector('#drop-down').value;
        model.setSearchInput(input, category);
        console.log(model.getSearchInput());
      }
      searchBtn.addEventListener('click', searchListener, false);

      let confirmDinnerBtn = this.view.container.querySelector('#sidebar-button');
      let confirmListener = function(event) {
        console.log("confirm");
      }
      confirmDinnerBtn.addEventListener('click', confirmListener, false);
    }

}
