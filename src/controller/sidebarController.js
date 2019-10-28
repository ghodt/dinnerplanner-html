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
    //  console.log(vad);
      console.log("add addEventListener for sidebar");

      let confirmButton = this.view.container.querySelector('#sidebar-button');
      let confirmListener = function(evt){
        this.nav.navigate("confirm-dinner");
      }.bind(this);
      confirmButton.addEventListener('click', confirmListener, false);

      let guestInput = this.view.container.querySelector('#number-input');
      let guestInputListener = function(evt){
        this.model.setNumberOfGuests(guestInput.value);
        console.log(guestInput.value);
      }.bind(this);
      guestInput.addEventListener('click', guestInputListener, false);

      let remove = this.view.container.querySelector('#sidebar-selected-dishes');

      let removeListener = function(evt){
        if(evt.target.className.includes("removeBtn")) {
          let id = evt.target.parentElement.parentElement.id;
          console.log('will remove this: ' + id);
          this.model.removeDishFromMenu(id);
        }
      }.bind(this);
      remove.addEventListener('click', removeListener, false);
    }
}
