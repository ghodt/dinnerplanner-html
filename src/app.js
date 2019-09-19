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

  if(document.getElementById("homeView") != null) {
    console.log("home");
    homeView.render();
  }
   if (document.getElementById("detailsView") != null) {
         console.log("details");
    detailsView.render(559251);
  }
  else if (document.getElementById("overviewView") != null) {
        console.log("overview");
    overviewView.render();
  }
  else if (document.getElementById("printoutView") != null) {
        console.log("print");
    printoutView.render();
  }
  else if (document.getElementById("searchView") != null) {
        console.log("search");
    searchView.render();
  }



  /**
   * IMPORTANT: app.js is the only place where you are allowed to
   * query for elements in the whole document.
   * In other places you should limit the search only to the children
   * of the specific view you're working with.
   */

};
