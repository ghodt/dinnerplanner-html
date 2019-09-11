window.onload = function () {
  console.log("start");
  //We instantiate our model
  const model = new DinnerModel();

  const container = document.getElementsByClassName("page-content")[0]
  const homeView = new HomeView(container);
  const overviewView = new OverviewView(container, model);
  const searchView = new SearchView(container, model);
  const detailsView = new SearchView(container, model);
  const printoutView = new SearchView(container, model);
  const sidebarView = new SearchView(container, model);
  searchView.render()



  /**
   * IMPORTANT: app.js is the only place where you are allowed to
   * query for elements in the whole document.
   * In other places you should limit the search only to the children
   * of the specific view you're working with.
   */

};
