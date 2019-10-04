class SidebarController {
    constructor(view, model, nav) {
        this.view = view;
        this.model = model;
        this.nav = nav;
    }

    renderView() {
      this.view.render();
      this.addEventListeners();
    }
    addEventListeners(){
      let view = this.view;
      let model = this.model;
      let nav = this.nav;

      let confirmButton = view.container.querySelector('#sidebar-button');
      let confirmListener = function(evt){
        nav.navigate("confirm-dinner");
      };
      confirmButton.addEventListener('click', confirmListener, false);

      let guestInput = view.container.querySelector('#number-input');
      let guestInputListener = function(evt){
        model.setNumberOfGuests(guestInput.value);
      };
      guestInput.addEventListener('click', guestInputListener, false);
    }
}
