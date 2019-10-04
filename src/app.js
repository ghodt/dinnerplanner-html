window.onload = async function () {
  console.log("start");
  //We instantiate our model
  const model = new DinnerModel();
  model.setNumberOfGuests(1);
  // await model.addDishToMenu(559251);
  // await model.addDishToMenu(559250);
  console.log(model.getTotalMenuPrice());
  console.log(model.getFullMenu());

  const container = document.getElementsByClassName("page-content")[0];
  const nav = new Navigator(container, model);

  nav.navigate("home");
  //detailsController.renderView(559250);

  /**
   * IMPORTANT: app.js is the only place where you are allowed to
   * query for elements in the whole document.
   * In other places you should limit the search only to the children
   * of the specific view you're working with.
   */

};
