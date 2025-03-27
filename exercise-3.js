// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};

const printPizzaPlace = function (pizzaPlace) {
  console.log(Object.entries(pizzaPlace));
};

printPizzaPlace(dominos);

const toppingsPriceRange = function (pizzaPlace) {
  for (const topping of Object.keys(pizzaPlace.pizzaToppings)) {
    const min = Math.min(...Object.values(pizzaPlace.pizzaToppings));
    const max = Math.max(...Object.values(pizzaPlace.pizzaToppings));
    result = [min, max];
    return result;
  }
};
console.log(toppingsPriceRange(dominos));

const calculateAverageRating = function (pizzaPlace) {
  for (const rating of Object.keys(pizzaPlace.starReviews)) {
    const sum = Object.values(pizzaPlace.starReviews).reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue;
      },
      0
    );
    let arrLength = Object.values(pizzaPlace.starReviews).length;
    return (sum / arrLength).toFixed(2);
  }
};

console.log(calculateAverageRating(dominos));
