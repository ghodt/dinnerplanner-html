class HomeController {
    constructor(view, model, nav) {
        this.view = view;
        this.model = model;
        this.nav = nav;

        // TODO lab 3
    }

    renderView() {
      this.view.render();
      this.addEventListeners();
    }

    addEventListeners() {
      let view = this.view;
      let nav = this.nav;

      let startBtn = view.container.querySelector('#startBtn');
      let startListener = function(evt){
        nav.navigate("start");
      };
      startBtn.addEventListener("click", startListener, false);
    }
}
