// Write your code here

class Breakfast {
    constructor(food, drink){
        this.food = food
        this.drink = drink
    }
}

class Lunch{
    constructor(salad,soup,drink) {
        this.salad = salad
        this.soup = soup
        this.drink = drink
    }
}

class Dinner {
    constructor(salad, soup, entree){
        this.salad = salad
        this.soup = soup
        this.entree = entree
    }
}
const brkfst = new Breakfast("eggs", "juice")
const lunch = new Lunch("side salad", "broccoli cheddar soup", "iced tea")
const dinner = new Dinner("balsamic salad","consomme","filet mignon")