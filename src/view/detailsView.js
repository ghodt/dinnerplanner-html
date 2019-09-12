class DetailsView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
  }

  render(dishId) {
    this.container.innerHTML = "";
    this.container.insertAdjacentHTML('beforebegin', header);
    let row = document.createElement('div');
    row.className = "row";
    row.innerHTML = sidebar;
    //this.container.insertAdjacentHTML('beforebegin', sidebar);

    const content = `
    <div class="container col-sm-9 text-center full-vh d-flex align-items-center justify-content-center flex-column row">
      <div class="row details-row">
        <div id="details-dish" class="col-6">
          <div id="details-dish-name" class="text-left">
            <h2>Toast</h2>
          </div>
          <div class="">
            <img src="images/toast.jpg" id="details-image"> </img>
          </div>
          </br>
          <p id="details-description" class="text-justify">Toast toast toast toast, toast toast toast. Toast toast toast toast, toast toast toast.
          Toast toast toast toast, toast toast toast. Toast toast toast toast, toast toast toast. Toast toast toast toast, toast toast toast.</p>
          <div class="text-left">
            <button type="button" id="go-back-to-searchBtn" class="btn btn-lg btn-primary align-self-end">
              Go back to search
            </button>
          </div>
        </div>
        <div id="details-ingredients" class="col-6">
          <h3> Ingredients for X people </h3>
          <ul>
            <li>Amount Olive oil SEK Price</li>
            <li>Bread</li>
          </ul>
          <div class="text-left">
            <button type="button" name="button" class="btn btn-lg btn-primary">Add to menu</button>
          </div>
          <div class="details-total-price text-right">
            SEK 4783.76
          </div>
        </div>
        <div class="row" id="details-preparation-row">
          <div id="details-preparation" class="col-6">
            <h3> Preparation</h3>
            <p> Blabmakegmkrsmglsöl <p>
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
