class SearchView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
  }

  async render(dishId) {
    //this.container.insertAdjacentHTML('beforebegin', header);
    console.log("bish");
    this.container.insertAdjacentHTML('afterbegin', header);
    this.container.querySelector('#sideBarView').innerHTML = sidebar;

    // let row = document.createElement('div');
    // row.className = "row";
    // row.innerHTML = sidebar;
    // const searchString = "Breakfast Pizza";
    // let dishes = await this.model.getAllDishes("", searchString);
    // console.log(dishes);
    //
    // row.innerHTML += start + dish_div;
    // this.container.innerHTML = "";
    // this.container.appendChild(row);
    this.afterRender();
  }

  afterRender() {

  }
}
