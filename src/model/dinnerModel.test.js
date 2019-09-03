const assert = chai.assert;
const expect = chai.expect;

describe("DinnerModel", () => {
  let model = new DinnerModel();

  beforeEach(() => {
    model = new DinnerModel();
  });

  describe("number of guests", () => {
    it("can set and get number of guests", () => {
      model.setNumberOfGuests(0);
      expect(model.getNumberOfGuests()).to.equal(0);

      model.setNumberOfGuests(1);
      expect(model.getNumberOfGuests()).to.equal(1);
    });

    it("won't allow negative number of guests", () => {
      model.setNumberOfGuests(1);
      expect(model.getNumberOfGuests()).to.equal(1);

      // this should not change the value
      model.setNumberOfGuests(-1);
      expect(model.getNumberOfGuests()).to.equal(1);
    });
  });

  describe("getting individual dishes", () => {
    it("gets the correct dish", (done) => {
      model.getDish(559251)
      .then((dish) => {
        expect(dish.title).to.equal("Breakfast Pizza");
        done();
      });
    }).timeout(10000);

    it("returns undefined if dish is not found", (done) => {
      model.getDish(-1)
      .then((dish) => {
        expect(dish.code).to.equal(404);
        done();
      });
    }).timeout(10000);
  });

  describe("filtering for dishes", () => {
    it("returns all dishes if no args are specified", (done) => {
      model.getAllDishes()
      .then((dish) => {
        console.log("data length", dish.length);
        expect(dish.length).to.equal(10);
        done();
      });
    }).timeout(10000);

    it("returns the correct dish type of main course and pizza", (done) => {
      model.getAllDishes("main course", "pizza")
      .then((dishes) => {
        console.log("filtered", dishes);
        const onlyHasPizzas = dishes.every(dish => dish.title.toLowerCase().indexOf("pizza") > -1);
        expect(onlyHasPizzas).to.equal(true);
        done();
      });
    }).timeout(10000);
  });

  describe("menu", () => {
    it("can add dishes", (done) => {
      model.getDish(559251)
      .then((dish) => {
        model.addDishToMenu(dish);
        expect(model.getFullMenu().length).to.equal(1);
        expect(model.getFullMenu()[0].id).to.equal(559251);
        done();
      });
    }).timeout(10000);

    it("can remove dishes", (done) => {
      model.getDish(559251)
      .then((dish) => {
        model.addDishToMenu(dish);
        expect(model.getFullMenu().length).to.equal(1);
        expect(model.getFullMenu()[0].id).to.equal(559251);

        model.removeDishFromMenu(559251);
        expect(model.getFullMenu().length).to.equal(0);
        expect(model.getFullMenu()).to.not.include(dish);
        done();
      });
    }).timeout(100000);
  });

  // Add tests for getting ingredients and calculating price
  describe("price", () => {
    /*it("gets ingredients", () => {
      let dish = model.getDish(1);
      model.addDishToMenu(dish);

      expect(model.getAllIngredients()).to.include(model.getDish(dish).ingredients[0]);
      expect(model.getAllIngredients()).to.include(model.getDish(dish).ingredients[1]);
    });*/

    it("calculates price", () => {
      model.setNumberOfGuests(2);
      let numOfGuests = model.getNumberOfGuests();
      model.getDish(559251)
      .then((dish) => {
        model.addDishToMenu(dish);
          expect(model.getTotalMenuPrice()).to.equal(195.59 * numOfGuests);
      });
  });
  });

  describe("loading indicator", () => {
    it("checks if the loading indicator is still visible on the page", () => {
      document.getElementById("loader").style.display = "none";
      expect(document.getElementById("loader").style.display).to.equal("none");
    });
  });


});
