class Templates {
  constructor(model, container) {
    this.model = model;
    this.container = container;
    this.header = `<div class="header col-sm-12 d-flex align-items-center justify-content-center">
        <h1>Dinner Planner</h1>
      </div>`;
    this.sidebar = `
        <div>
          <h2 id="sidebar-header">My Dinner</h2>
          <div id="sidebar-guests">
            <span>People</span>
            <input type="number" id="number-input" class="value-num-guests-input" min="1" max="100" name="number-of-guests" value="` + this.model.getNumberOfGuests() +
            `">
            </div>
        </div>
      <div id="sidebar-mid-section" class="col-12 row align-items-center">
        <div id="sidebar-dish-name" class="float-left">Dish Name</div>
        <div id="sidebar-cost" class="float-right text-right">Cost</div>
      </div>
      <div id="sidebar-selected-dishes">
      </div>
      <div>
        <div id="sidebar-total-price" class="text-right col-12"></div>
        <div class="text-center">
          <button type="button" class="btn btn-primary" id="sidebar-button" name="confirm-button">Confirm Dinner</button>
        </div>
      </div>`;
  }

  addDishesToSidebar() {
    const menu = this.model.getFullMenu();
    const guests = this.model.getNumberOfGuests();
    let parent = this.container.querySelector('#sidebar-selected-dishes');
    parent.innerHTML = "";

    for(const food of menu){
      let dish = document.createElement('div');
      dish.className = "sidebar-dish";
      dish.innerHTML = '<span class="sidebar-dish-title">' + food.title + '</span><span class="sidebar-dish-cost">' + food.pricePerServing * guests + '</span>';
      parent.appendChild(dish);
    }
    let totalPrice = this.model.getTotalMenuPrice();
    console.log("Total price: " + totalPrice);
    let price = document.createElement('div');
    price.id = "sidebar-total-price";
    price.className = "text-right col-12";
    price.innerHTML = totalPrice.toFixed(2) + " SEK";
    parent.appendChild(price);
  }
}
