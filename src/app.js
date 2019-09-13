window.onload = function () {
  console.log("start");
  //We instantiate our model
  const model = new DinnerModel();

  const container = document.getElementsByClassName("page-content")[0]
  const homeView = new HomeView(container);
  const overviewView = new OverviewView(container, model);
  const searchView = new SearchView(container, model);
  const detailsView = new DetailsView(container, model);
  const printoutView = new PrintoutView(container, model);

  if(document.getElementById("homeView") != null) {
    homeView.render();
  }
  else if (document.getElementById("detailsView") != null) {
    detailsView.render();
  }
  else if (document.getElementById("overviewView") != null) {
    overviewView.render();
  }
  else if (document.getElementById("printoutView") != null) {
    printoutView.render();
  }
  




  /**
   * IMPORTANT: app.js is the only place where you are allowed to
   * query for elements in the whole document.
   * In other places you should limit the search only to the children
   * of the specific view you're working with.
   */

};
