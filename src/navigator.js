class Navigator {
  constructor(container, model){
    this.container = container;
    this.model = model;
    this.homeView = new HomeView(this.container);
    this.overviewView = new OverviewView(this.container, this.model);
    this.searchView = new SearchView(this.container, this.model);
    this.detailsView = new DetailsView(this.container, this.model);
    this.printoutView = new PrintoutView(this.container, this.model);
    this.sidebarView = new SidebarView(this.container, this.model);
    this.searchController = new SearchController(this.searchView, this.model, this);
    this.sidebarController = new SidebarController(this.sidebarView, this.model, this);
    this.detailsController = new DetailsController(this.detailsView, this.model, this);
  }

  navigate(message){
    if(message == "details"){
      this.sidebarController.renderView();
      this.detailsController.renderView(559250);
    }
    if(message == "details-back"){
      this.renderSearch();
    }
  }

  clearView(){
    console.log("cleared view");
    this.container.innerHTML = "";
  }

  async getDishDetails(id) {
    console.log("getDishDetails");

    this.clearView();
    this.sidebarView.render();
    this.sidebarController.renderView();
    await this.detailsController.renderView(id);
  }

  renderSidebar(){
    this.sidebarController.renderView();
  }

  renderSearch(){
    this.clearView();
    this.sidebarController.renderView();
    this.searchController.renderView();
  }

}
