/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT //

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT //

// YOUR WORK GOES HERE //

let grabCategories = (arr) => {
  return Object.keys(arr);
};
console.log(grabCategories(papaJohns));
console.log(grabCategories(papaJohns.pizzaToppings)); //BONUS

let verifyValues = (arr, nov) => {
  return Object.keys(arr).length === nov;
};

console.log(verifyValues(papaJohns, 9));

getToppingsInfo = (place) => {
  console.log(place.name, Object.entries(place.pizzaToppings));
};

getToppingsInfo(papaJohns);

papaJohns.printAd = function (topping) {
  if (topping in this.pizzaToppings) {
    console.log(
      `Welcome to ${this.name}! We are located at ${this.address}. This week, we are having a sale on ${topping} 
      for $${this.pizzaToppings[topping]}. ${this.slogan}`
    );
  }
};

papaJohns.address = "1005 Main St";
papaJohns.slogan = "One pepper for the entire pizza!";

papaJohns.printAd("olives");
