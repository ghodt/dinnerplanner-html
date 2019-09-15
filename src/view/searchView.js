class SearchView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
  }

  async render(dishId) {
    //this.container.insertAdjacentHTML('beforebegin', header);
    this.container.insertAdjacentHTML('afterbegin', header);
    this.container.querySelector('#sideBarView').innerHTML = sidebar;

     const searchString = "Breakfast Pizza";
     let dishes = await this.model.getAllDishes("", searchString);
     let dishItems = this.container.querySelector('#dishItems');
     console.log(dishes);

     for(let i = 0; i < dishes.length; i++) {
       let dish = document.createElement('div');
       dish.className = "dish";
       let dishContent = document.createElement('div');
       let img = document.createElement('img');
       img.src = "https://spoonacular.com/recipeImages/" + dishes[i].image;
       console.log(dishes[i].image);
       dishContent.id = "result-images";
       dishContent.appendChild(img);
       dish.appendChild(dishContent);

       let title = document.createElement('span');
       title.className = "value-main-course-name";
       title.innerHTML = dishes[i].title;
       dish.appendChild(title)

       dishItems.appendChild(dish);
     }


    this.afterRender();
  }

  afterRender() {

  }
}
