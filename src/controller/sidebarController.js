class SidebarController {
    constructor(view, model, nav) {
      console.log("created sidebar controller");
        this.view = view;
        this.model = model;
        this.nav = nav;

        // TODO lab 3
    }

    addEventListeners(){

    }

    renderView() {
      this.view.render();
      this.addEventListeners();
    }


}
