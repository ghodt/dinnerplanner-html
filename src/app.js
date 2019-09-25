window.onload = async function () {
  console.log("start");
  //We instantiate our model
  const model = new DinnerModel();
  model.setNumberOfGuests(3);
  await model.addDishToMenu(559251);
  await model.addDishToMenu(559250);
  console.log(model.getTotalMenuPrice());
  console.log(model.getFullMenu());

  const container = document.getElementsByClassName("page-content")[0];
  const homeView = new HomeView(container);
  const overviewView = new OverviewView(container, model);
  const searchView = new SearchView(container, model);
  const detailsView = new DetailsView(container, model);
  const printoutView = new PrintoutView(container, model);
  //const searchController = new SearchController(searchView, model);
  const detailsController = new DetailsController(detailsView, model);

  detailsController.renderView(559250);

  // let navigate = function (message){
  //   console.log(message);
  // }

  /**
   * IMPORTANT: app.js is the only place where you are allowed to
   * query for elements in the whole document.
   * In other places you should limit the search only to the children
   * of the specific view you're working with.
   */

};

// navigate(message){
//   console.log(message);
// }

// showSearchView() {
//   searchView.render();
// };
