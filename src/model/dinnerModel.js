//DinnerModel class
class DinnerModel {

  constructor() {
  //  this.dishes = dishesConst;
    this.numberOfGuests = 0;
    this.dinnerMenu = [];
    this.auth = {
      "X-Mashape-Key": key
    };
  }

  setNumberOfGuests(num) {
    // If num is negative numberOfGuests will not change
    if(num >= 0){
      this.numberOfGuests = num;
    }
  }

  getNumberOfGuests() {
    return this.numberOfGuests;
  }

  //Returns the dish that is on the menu for selected type
/*  getSelectedDish(type) {
    let dish = this.dinnerMenu.find(dish => dish.dishTypes.find(currType => currType == type));
  }*/

  //Returns all the dishes on the menu.
  getFullMenu() {
    return this.dinnerMenu;
  }

  //Returns all ingredients for all the dishes on the menu.
/*  getAllIngredients() {
    return this.dinnerMenu.map((dish) => dish.ingredients).flat();
  }*/

  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
  getTotalMenuPrice() {
  //  console.log(this.dinnerMenu[0].pricePerServing);
    //console.log(this.getFullMenu()[0].pricePerServing);
    let cost = 0;
    this.dinnerMenu.forEach(dish => {
      cost += dish.pricePerServing;
    });
    return (cost * 2);
  }

  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  addDishToMenu(newDish) {
    /*const oldDish = this.getSelectedDish(newDish.type);
    if(oldDish !== undefined){
      this.removeDishFromMenu(oldDish.id);
    }*/
    this.dinnerMenu.push(newDish);
  }

  //Removes dish from menu
  removeDishFromMenu(id) {
    this.dinnerMenu.splice(this.dinnerMenu.indexOf(this.dinnerMenu.find(dish => dish.id == dish)), 1);
  }


  //Returns all dishes of specific type (i.e. "starter", "main dish" or "dessert").
  //query argument, text, if passed only returns dishes that contain the query in name or one of the ingredients.
  //if you don't pass any query, all the dishes will be returned
  // FIX
  async getAllDishes(type, query) {
    if(type == undefined) {
      type = "";
    }
    if(query == undefined) {
      query = "";
    }

    let dishes = await fetch(endpoint + "search?type=" + type + "&query=" + query, {
      headers: this.auth
    })
    .then(response => response.json())
    .then(data => data.results);
    return dishes;
  }

  //Returns a dish of specific ID
  async getDish(id) {
    let dish = await fetch(endpoint + id + "/information", {
      headers: this.auth
    })
    .then(response => response.json())
    .catch(console.error());
    return dish;
  }
}


// Deepfreeze
// https://github.com/substack/deep-freeze/blob/master/index.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
function deepFreeze(o) {
  Object.freeze(o);
  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (o.hasOwnProperty(prop)
      && o[prop] !== null
      && (typeof o[prop] === "object" || typeof o[prop] === "function")
      && !Object.isFrozen(o[prop])) {
      deepFreeze(o[prop]);
    }
  });
}

deepFreeze(dishesConst);
