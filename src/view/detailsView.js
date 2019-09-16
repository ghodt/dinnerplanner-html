class DetailsView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
  }

  async render(dishId) {
    const dish = await this.model.getDish(dishId);
    const num_of_guests = this.model.getNumberOfGuests();
    // pretend to get number of guests later
    this.model.setNumberOfGuests(2);
    // set header and sidebar
    this.container.insertAdjacentHTML('afterbegin', header);

    let totalRow = document.createElement('div');
  //  detailsRow.id = "content";
    totalRow.className = "row";

    let sideBar = document.createElement('div');
    sideBar.id = "sideBarView";
    sideBar.className = "container col-sm-3";
    sideBar.innerHTML = sidebar;
    totalRow.appendChild(sideBar);
    this.container.appendChild(totalRow);

    let detailsView = document.createElement('div');
    detailsView.id = "details-container";
    detailsView.className = "container col-sm-9 text-center full-vh d-flex align-items-center justify-content-center flex-column row";

    totalRow.appendChild(detailsView);

    let detailsRow = document.createElement('div');
    detailsRow.className = "row details-row";

    let detailsDish = document.createElement('div');
    detailsDish.id = "details-dish";
    detailsDish.className = "col-6";

    detailsDish.innerHTML = `<div id="details-dish-name" class="text-left details-header">
              <h1> <span class="value-main-course-name">` + dish.title + `</span></h1>
            </div>
            <div class="">
              <img id="details-image" src="` +  dish.image + `">
            </div>
            <p id="details-description" class="text-justify"> Here is some facts about this dish. </p>
            <div class="text-left">
              <button type="button" id="go-back-to-searchBtn" class="btn btn-lg btn-primary align-self-end">
                Go back to search
              </button>
            </div>`;

    let detailsIngredients = document.createElement('div');
    detailsIngredients.id = "details-ingredients";
    detailsIngredients.className = "col-6";

    // set ingredients list
    let ingredients_list = document.createElement('ul');
    for(let i = 0; i < dish.extendedIngredients.length; i++) {
      let ing = document.createElement('li');
      ing.innerHTML = dish.extendedIngredients[i].original;
      ingredients_list.appendChild(ing);
    }
    detailsIngredients.innerHTML = `
            <h3> Ingredients for <span class="value-num-guests">`+ this.model.getNumberOfGuests() + `</span> people </h3>
            <span id="ingredients-list">`+ ingredients_list.innerHTML + `</span>
            <div class="">

              <span class="text-right" id="details-total-price">
                SEK 0
              </span>
              <span class="text-left">
                <button type="button" name="button" id="details-add-button" class="btn btn-lg btn-primary">Add to menu</button>
              </span>
            </div>
          `;


    let detailsPrep = document.createElement('div');
    detailsPrep.id = "details-preparation-row";
    detailsPrep.className = "col-12";
    let prep = document.createElement('div');
    prep.id = "details-preparation";
    prep.className = "col-12 text-left text-justify";
    let h = document.createElement('h3');
    h.className = "details-header";
    h.innerHTML = "Preparation";
    let p = document.createElement('p');
    let instructions = document.createElement('span');
    instructions.id = "instructions";
    instructions.innerHTML = dish.instructions;
    p.appendChild(instructions);
    prep.appendChild(h);
    prep.appendChild(p);
    detailsPrep.appendChild(prep);


  detailsRow.appendChild(detailsDish);
  detailsRow.appendChild(detailsIngredients);
  detailsRow.appendChild(detailsPrep);

  detailsView.appendChild(detailsRow);





    // set dish image
//    this.container.querySelector('#details-image').src = dish.image;


  //  this.container.querySelector('#ingredients-list').appendChild(ingredients_list);

    // set number of guests
  /*  const guests = this.container.getElementsByClassName("value-num-guests");
    for(let i = 0; i < guests.length; i++) {
      guests[i].innerHTML = num_of_guests;
    }*/

    // set instructions
    //const instructions = this.container.querySelector("#instructions");
  //  instructions.innerHTML = dish.instructions;
  }

  afterRender() {
  }
}
