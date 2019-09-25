class Navigator {
  constructor(container, model){
    this.container = container;
    this.model = model;
    this.homeView = new HomeView(this.container);
    this.overviewView = new OverviewView(this.container, this.model);
    this.searchView = new SearchView(this.container, this.model);
    this.detailsView = new DetailsView(this.container, this.model);
    this.printoutView = new PrintoutView(this.container, this.model);
    this.searchController = new SearchController(this.searchView, this.model, this);
    this.detailsController = new DetailsController(this.detailsView, this.model, this);
  }

  navigate(message){
    if(message == "details"){
      this.detailsController.renderView(559250);
    }
    if(message == "details-back"){
      this.renderSearch();
    }
  }

  clearView(){
    this.container.innerHTML = "";
  }

  renderSearch(){
    this.clearView();
    this.searchController.renderView();
  }

}
