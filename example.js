class Alcoholic {
  constructor() {
    this.niceEvening = [];
    this.drink = new Barmen().pourDrink();
    this.snack = new Chef().prepareSnack();
  }

  drinkUp() {
    this.niceEvening.push(this.drink);
    setTimeout(() => {
      this.niceEvening.push(this.snack);
    }, 2000)
  }
}

class Chef {
  constructor() {
      this.prepareSnack()
  }

  prepareSnack = function () {
      //Налить выпить.
  }
}

class Barmen {
    constructor() {
        this.pourDrink()
    }

    pourDrink = function () {
        //Налить выпить.
    }
}