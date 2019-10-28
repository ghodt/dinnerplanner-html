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

    this.homeController = new HomeController(this.homeView, this.model, this);
    this.searchController = new SearchController(this.searchView, this.model, this);
    this.sidebarController = new SidebarController(this.sidebarView, this.model, this);
    this.detailsController = new DetailsController(this.detailsView, this.model, this);
    this.overviewController = new OverviewController(this.overviewView, this.model, this);
    this.printoutController = new OverviewController(this.printoutView, this.model, this);
  }

  navigate(message){
    console.log("Message: " + message);
    switch (message) {
      case "home":
        this.renderHome();
        break;

      case "start":
      case "details-back":
      case "overview-back":
      case "printout-back":
        this.renderSearch();
        break;

      case "confirm-dinner":
        this.renderOverview();
        break;

      case "print":
        this.renderPrintout();
        break;

      default:
        this.renderDetails(message);
        break;
    }
  }

  clearView(){
    this.container.innerHTML = "";
  }

  renderHome() {
    let numberOfGuests = window.localStorage.getItem('numberOfGuests');
    if(numberOfGuests != null) {
      this.model.setNumberOfGuests(numberOfGuests);
    }
    let menu = window.localStorage.getItem('menu');
    if(menu != null){
      menu = JSON.parse(menu);
      for(const dish of menu){
        this.model.addDishToMenu(dish.id);
      }
    }
    this.homeController.renderView();
  }

  async renderDetails(id) {
    this.clearView();
    this.sidebarController.renderView();
    await this.detailsController.renderView(id);
  }

  renderSearch(){
    this.clearView();
    this.sidebarController.renderView();
    this.searchController.renderView();
  }

  renderOverview() {
    this.clearView();
    this.overviewController.renderView();
  }

  renderPrintout() {
    this.clearView();
    this.printoutController.renderView();
  }

}
