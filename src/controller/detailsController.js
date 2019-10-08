class DetailsController {
    constructor(view, model, nav) {
        this.view = view;
        this.model = model;
        this.nav = nav;
    }

    addEventListeners(dishId) {
      let view = this.view;
      let model = this.model;
      let nav = this.nav;

      let backBtn = view.container.querySelector("#go-back-to-searchBtn");
      let backListener = function(evt){
        nav.navigate("details-back");
      };
      backBtn.addEventListener("click", backListener, false);

      let addBtn = this.view.container.querySelector("#details-add-button");
      let addListener = async function(evt){
        await model.addDishToMenu(dishId);
        //this.nav.sidebarController.addEventListeners();
      }.bind(this);
      addBtn.addEventListener("click", addListener, false);
    }

    async renderView(dishId) {
      await this.view.render(dishId);
      this.addEventListeners(dishId);
    }
}
