class OverviewView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render() {
      const templates = new Templates(this.model);
      const num_of_guests = this.model.getNumberOfGuests();

      this.container.insertAdjacentHTML('afterbegin', templates.header);
      const content = this.container.querySelector('#content');
      const dinnerOverview = content.appendChild(document.createElement('div'));
      dinnerOverview.classList.add("col-sm-12");
      const div1 = dinnerOverview.appendChild(document.createElement('div'));
      div1.id = "my-dinner-go-back";
      const paragraph = dinnerOverview.appendChild(document.createElement('P'))
      //paragraph.className = "value-num-guests";
      // GET REAL DATA

      paragraph.innerHTML = 'My Dinner: <span class="value-num-guests">' + num_of_guests + "</span> people";
      console.log(paragraph.innerHTML);

      //let goBackBtn = this.container.appendChild(document.createElement('button'));
      let goBackBtnDiv = div1.appendChild(document.createElement('div'));
      goBackBtnDiv.className = "text-right";
      let goBackBtn = goBackBtnDiv.appendChild(document.createElement('button'));
      goBackBtn.id = "go-back-btn";
      goBackBtn.className = "btn btn-primary"
      goBackBtn.innerHTML = "Go back and edit dinner";
      div1.appendChild(paragraph);
      div1.appendChild(goBackBtnDiv);

      const div2 = dinnerOverview.appendChild(document.createElement('div'))
      div2.id = "my-dinner-overview";

      for(const food of ["toast", "icecream"]) {
        const dish = document.createElement('div');
        dish.className = "dish";
        const img_div = document.createElement('div');
        let img = document.createElement('img');
        img.src = "../../images/" + food + ".jpg";
        const dish_title = document.createElement('p');
        dish_title.className = ".value-main-course-name";
        dish_title.innerHTML = "Icecream";
        const price = document.createElement('p');
      //  price.className = ""
        price.innerHTML = "100 SEK";

        img_div.appendChild(img);
        img_div.appendChild(dish_title);
        img_div.appendChild(price);
        dish.appendChild(img_div);
        div2.appendChild(dish);
      }
      const totalPrice = div2.appendChild(document.createElement('p'));
      const price = 300;
      totalPrice.innerHTML = "Total: " + price + " SEK";

      const div3 = dinnerOverview.appendChild(document.createElement('div'));
      div3.classList.add("text-center");
      const printBtn = document.createElement('button');
      printBtn.id = "toPrintBtn";
      printBtn.className = "btn btn-primary";
      printBtn.innerHTML = "Print Full Recipe";
      div3.appendChild(printBtn);


      this.afterRender();
    }

    afterRender() {

    }
}
