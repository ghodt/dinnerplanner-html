class DetailsView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
  }

  async render(dishId) {
    // set header
    this.container.querySelector('#header').innerHTML = header;

    // set sidebar
    this.container.querySelector('#sideBarView').innerHTML = sidebar;

    // get dish and number of guests
    const dish = await this.model.getDish(dishId);
    const num_of_guests = 2; //this.model.getNumberOfGuests();

    // set dish title
    const dishTitles = this.container.getElementsByClassName("value-main-course-name");
    for(let i = 0; i < dishTitles.length; i++) {
      dishTitles[i].innerHTML = dish.title;
    }

    // set ingredients list
    let ingredients_list = document.createElement('ul');
    for(let i = 0; i < dish.extendedIngredients.length; i++) {
      let ing = document.createElement('li');
      ing.innerHTML = dish.extendedIngredients[i].original;
      ingredients_list.appendChild(ing);
    }

    // set number of guests
    const guests = this.container.getElementsByClassName("value-num-guests");
    for(let i = 0; i < guests.length; i++) {
      guests[i].innerHTML = num_of_guests;
    }

    // set instructions
    const instructions = this.container.querySelector("#instructions");
    instructions.innerHTML = dish.instructions;
  }

  afterRender() {
  }
}
