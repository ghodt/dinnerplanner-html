class DetailsView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.model.addObserver(this);
    this.templates = new Templates(this.model, this.container);
    this.dish;
  }

  async render(dishId) {
    const dish = await this.model.getDish(dishId);
    this.dish = dish;
    console.log(dish);
    const num_of_guests = this.model.getNumberOfGuests();
    // set header and sidebar
    this.container.insertAdjacentHTML('afterbegin', this.templates.header);

    const loader = document.createElement('div');
    loader.id = "loader";
    loader.className = "spinner-border";
    loader.role = "status";
    loader.innerHTML = '<span class="sr-only">Loading...</span>';
    this.container.appendChild(loader);

    // let totalRow = document.createElement('div');
    // totalRow.className = "row";
    // this.container.appendChild(totalRow);
    let totalRow = this.container.querySelector('#totalRow');

    // let sideBar = document.createElement('div');
    // sideBar.id = "sideBarView";
    // sideBar.className = "container col-sm-3";
    // sideBar.innerHTML = this.templates.sidebar;
    // totalRow.appendChild(sideBar);
    // this.templates.addDishesToSidebar();

    let detailsView = document.createElement('div');
    detailsView.id = "details-container";
    detailsView.className = "container col-sm-9 text-center full-vh d-flex align-items-center justify-content-center flex-column";

    totalRow.appendChild(detailsView);

    let detailsRow = document.createElement('div');
    detailsRow.id = dishId;
    detailsRow.className = "row details-row";
    detailsView.appendChild(detailsRow);

    // DETAILS
    let detailsDish = document.createElement('div');
    detailsDish.id = "details-dish";
    // detailsDish.className = "";

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
    detailsRow.appendChild(detailsDish);

    // INGREDIENTS
    let detailsIngredients = document.createElement('div');
    detailsIngredients.id = "details-ingredients";
    detailsIngredients.className = "";

    let ingredients_list = document.createElement('ul');
    for(let i = 0; i < dish.extendedIngredients.length; i++) {
      let ing = document.createElement('li');
      ing.innerHTML = dish.extendedIngredients[i].amount * num_of_guests + " " + dish.extendedIngredients[i].unit + " " + dish.extendedIngredients[i].originalName;
      ingredients_list.appendChild(ing);
    }
    detailsIngredients.innerHTML = `
            <div id="ingredient-content">
              <h3 id="details-ingredients-header"> Ingredients for <span class="value-num-guests">`+ num_of_guests + `</span> people </h3>
              <span class="text-left" id="ingredients-list">`+ ingredients_list.innerHTML + `</span>
              <div class="">
                <span class="text-right" id="details-total-price">
                  SEK `+ dish.pricePerServing * num_of_guests + `
                </span>
              </div>
            </div>
            <span class="text-left">
              <button type="button" name="button" id="details-add-button" class="btn btn-lg btn-primary">Add to menu</button>
            </span>
          `;
    detailsRow.appendChild(detailsIngredients);
    console.log(dish);
    // PREPARATION
    let detailsPrep = document.createElement('div');
    detailsPrep.id = "details-preparation-row";
    detailsPrep.className = "";
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
    detailsRow.appendChild(detailsPrep);

    this.afterRender();
  }

  // async sleep(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }

  async afterRender() {
        this.container.removeChild(loader);
        // this.update(this.model, this.model.getFullMenu);
  }

  update(model, changeDetails) {
    if (changeDetails == model.getNumberOfGuests) {
      this.updateIngredients(model);
    }

  }

  async updateIngredients(model) {
    console.log('updating ingreddejd');
    let ingredientContent = this.container.querySelector("#ingredient-content");
    ingredientContent.innerHTML = "";
    const dish = this.dish;

    let num_of_guests = model.getNumberOfGuests();
    let ingredients_list = document.createElement('ul');
    for(let i = 0; i < dish.extendedIngredients.length; i++) {
      let ing = document.createElement('li');
      ing.innerHTML = dish.extendedIngredients[i].amount * num_of_guests + " " + dish.extendedIngredients[i].unit + " " + dish.extendedIngredients[i].originalName;
      ingredients_list.appendChild(ing);
    }
    ingredientContent.innerHTML = `
          <h3 id="details-ingredients-header"> Ingredients for <span class="value-num-guests">`+ num_of_guests + `</span> people </h3>
          <span class="text-left" id="ingredients-list">`+ ingredients_list.innerHTML + `</span>
          <div class="">
            <span class="text-right" id="details-total-price">
              SEK `+ dish.pricePerServing * num_of_guests + `
            </span>
          </div>
          `;
  }
}
