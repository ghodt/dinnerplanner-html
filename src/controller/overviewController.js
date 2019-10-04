class OverviewController {
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
        nav.navigate("overview-back");
      }
      backBtn.addEventListener('click', backListener, false);

      let printBtn = view.container.querySelector('#toPrintBtn');
      let printListener = function(evt){
        // console.log("go to print");
        nav.navigate("print");
      };
      printBtn.addEventListener('click', printListener, false);
    }
}
