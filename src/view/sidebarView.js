class SidebarView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.model.addObserver(this);
  }

  render() {
    var content =  `
    <div class="row content" id="totalRow">
      <div id="sideBarView" class="container col-sm-3">
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
        </div>
      </div>
    </div>
    `;
    this.container.innerHTML = content;
    this.afterRender();
  }

  afterRender() {
    this.addDishesToSidebar(this.model);
  }

  update(model, changeDetails) {
    if(changeDetails == model.getFullMenu) {
      this.addDishesToSidebar(model);
    }
    if(changeDetails == model.getNumberOfGuests) {
      // let input = this.container.querySelector('#number-input');
      // input.value = model.getNumberOfGuests();
      this.addDishesToSidebar(model);
    }
  }

  addDishesToSidebar(model) {
    console.log("addDishesToSidebar");
    const menu = model.getFullMenu();
    console.log(JSON.stringify(menu));
    document.cookie = "menu=" + JSON.stringify(menu);
    console.log(menu);
    const guests = model.getNumberOfGuests();
    let parent = this.container.querySelector('#sidebar-selected-dishes');
    parent.innerHTML = "";
    for(const food of menu){
      let dish = document.createElement('div');
      let dishCost = (food.pricePerServing * guests).toFixed(2);
      dish.className = "sidebar-dish";
      console.log(food.title + " " + food.id);
      dish.id = food.id;
      dish.innerHTML = '<span class="sidebar-dish-title">' + food.title + '</span><span class="sidebar-dish-cost">' + food.pricePerServing * guests + '<button class="removeBtn btn btn-sm btn-primary">X</button></span>';
      parent.appendChild(dish);
    }
    let p = document.createElement('p')
    p.innerHTML = "reeeeeee";
    // parent.appendChild(p);
    let totalPrice = this.model.getTotalMenuPrice();
    let price = document.createElement('div');
    price.id = "sidebar-total-price";
    price.className = "text-right col-12";
    price.innerHTML = totalPrice.toFixed(2) + " SEK";
    parent.appendChild(price);
  }

}
