class DetailsController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        // TODO lab 3
    }

    addEventListeners(dishId) {
      let model = this.model;
      let backBtn = this.view.container.querySelector("#go-back-to-searchBtn");
      let backListener = function(evt){
        console.log("backkkkk");
        navigate("go backkk");
      };
      backBtn.addEventListener("click", backListener, false);

      let addBtn = document.getElementById("details-add-button");
      let addListener = function(evt){
        model.addDishToMenu(dishId);
      };
      addBtn.addEventListener("click", addListener, false);
    }

    async renderView(dishId) {
      await this.view.render(dishId);
      this.addEventListeners(dishId);
    }
}
