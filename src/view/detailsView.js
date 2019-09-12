class DetailsView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
  }

  async render(dishId) {
    this.container.innerHTML = "";
    this.container.insertAdjacentHTML('beforebegin', header);
    let row = document.createElement('div');
    row.className = "row";
    row.innerHTML = sidebar;
    const dish = await this.model.getDish(559251);
    const num_of_guests = 2; //this.model.getNumberOfGuests();

    let content = `
    <div id="details-container" class="container col-sm-9 text-center full-vh d-flex align-items-center justify-content-center flex-column row">
      <div class="row details-row">
        <div id="details-dish" class="col-6">
          <div id="details-dish-name" class="text-left details-header">
            <h1>` + dish.title + `</h1>
          </div>
          <div class="">
            <img src="` + dish.image + `" id="details-image"> </img>
          </div>
          <p id="details-description" class="text-justify">`+ "Here is some facts about this dish."+ `</p>
          <div class="text-left">
            <button type="button" id="go-back-to-searchBtn" class="btn btn-lg btn-primary align-self-end">
              Go back to search
            </button>
          </div>
        </div>
        <div id="details-ingredients" class="col-6">
          <h3> Ingredients for `+ num_of_guests + ` people </h3>`;
          let ingredients_list = "<ul>";
          for(let i = 0; i < dish.extendedIngredients.length; i++) {
            ingredients_list += "<li>" + dish.extendedIngredients[i].name + "</li>";
          }
          ingredients_list += "</ul>";
          content += ingredients_list +
          `<div class="">
            <span class="text-left">
              <button type="button" name="button" id="details-add-button" class="btn btn-lg btn-primary">Add to menu</button>
            </span>
            <span class="text-right" id="details-total-price">
              SEK 4783.76
            </span>
          </div>
        </div>
        <div class="row" id="details-preparation-row">
          <div id="details-preparation" class="col-12 text-left text-justify">
            <h3 class="details-header"> Preparation</h3>
            <p> ` + dish.instructions + `<p>
          </div>
        </div>
      </div>
    </div>`;
    row.innerHTML += content;
    this.container.innerHTML = "";
    this.container.appendChild(row);
  }

  afterRender() {
  }
}
