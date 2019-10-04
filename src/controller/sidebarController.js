class SidebarController {
    constructor(view, model, nav) {
      // console.log("created sidebar controller");
        this.view = view;
        this.model = model;
        this.nav = nav;

        // TODO lab 3
    }

    addEventListeners(){
      let view = this.view;
      let model = this.model;
      let nav = this.nav;

      let confirmButton = view.container.querySelector('#sidebar-button');
      let confirmListener = function(evt){
        nav.navigate("confirm-dinner");
        view.update(model.getFullMenu);
      }
      confirmButton.addEventListener('click', confirmListener, false);

      let guestInput = view.container.querySelector('#number-input');
      let guestInputListener = function(evt){
        // console.log("New guest value: " + guestInput.value);
        model.setNumberOfGuests(guestInput.value);
        view.update(model.getNumberOfGuests);
      }
      guestInput.addEventListener('click', guestInputListener, false);
    }

    renderView() {
      this.view.render();
      this.addEventListeners();
    }


}
