class PrintoutView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
  }

  render(dishId) {
    const templates = new Templates(this.model);
    const num_of_guests = this.model.getNumberOfGuests();
    const menu = this.model.getFullMenu();
    // set header
    this.container.insertAdjacentHTML('afterbegin', templates.header);

    const content = this.container.querySelector('#content');
    const dinnerOverview = content.appendChild(document.createElement('div'));
    dinnerOverview.classList.add("col-sm-12");
    dinnerOverview.id = "printout-container";
    const div1 = dinnerOverview.appendChild(document.createElement('div'));
    div1.id = "my-dinner-go-back";
    const paragraph = dinnerOverview.appendChild(document.createElement('P'));
    paragraph.innerHTML = 'My Dinner: <span class="value-num-guests">' + num_of_guests + "</span> people";

    let goBackBtnDiv = div1.appendChild(document.createElement('div'));
    goBackBtnDiv.className = "text-right";
    let goBackBtn = goBackBtnDiv.appendChild(document.createElement('button'));
    goBackBtn.id = "go-back-btn";
    goBackBtn.className = "btn btn-primary"
    goBackBtn.innerHTML = "Go back and edit dinner";
    div1.appendChild(paragraph);
    div1.appendChild(goBackBtnDiv);

    const div2 = dinnerOverview.appendChild(document.createElement('div'));
    div2.id = "printout-overview";

    for(const food of menu) {
      const dish = document.createElement('div');
      dish.className = "dish-row row col-sm-12";

      const img_div = document.createElement('div');
      img_div.className = "container col-sm-2";
      let img = document.createElement('img');
      img.src = food.image;

      const dish_details = document.createElement('div');
      dish_details.className = "container value-main-course-name col-sm-3";
      dish_details.innerHTML = "<h2>" + food.title + "</h2><p> Here is a nice recipe for making the greatest " + food.title + " in the world.</p>";

      const preparation = document.createElement('div');
      preparation.innerHTML = "<h2> Preparation </h2>";
      preparation.className = "container col-sm-7";
      preparation.innerHTML += food.instructions;

      img_div.appendChild(img);
      dish.appendChild(img_div);
      dish.appendChild(dish_details);
      dish.appendChild(preparation);
      div2.appendChild(dish);
    }
  }





  afterRender() {
  }
}
