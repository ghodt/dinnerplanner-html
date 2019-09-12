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
    <div class="container col-sm-9 text-center full-vh d-flex align-items-center justify-content-center flex-column"><div>
      <div>
        <h2>Toast</h2>
        <img src="images/toast.jpg"> </img>
      </div>
      <h3> Preparations </h3>
      <p> Blabmakegmkrsmglsöl <p>
      <button type="button" id="go-back-to-searchBtn" class="btn btn-lg btn-primary">
        Go back to search
      </button>
      <div class="recipe">
        <h3> Ingredients for 3 people </h3>
        <ul>
          <li>Olive oil</li>
          <li>Bread</li>
        </ul>
        <button type="button" name="button" class="btn btn-lg btn-primary">Add to menu</button>
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
