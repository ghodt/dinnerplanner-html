class PrintoutController {
    constructor(view, model, nav) {
        this.view = view;
        this.model = model;
        this.nav = nav;
    }

    renderView() {
      this.view.render();
      this.addEventListeners();
    }

    addEventListeners() {
      let view = this.view;
      let model = this.model;
      let nav = this.nav;

      let backBtn = view.container.querySelector('#go-back-btn');
      let backListener = function(evt) {
        nav.navigate("printout-back");
      }
      backBtn.addEventListener('click', backListener, false);
    }
}
