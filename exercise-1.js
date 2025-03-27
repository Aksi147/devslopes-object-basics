/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //
const favRest = {
  name: "Paya Thai",
  cuisines: ["Coconut soup", "Pho", "Pad thai"],
  numberOfStars: 5,
  favorited: false,
};

favRest.address = "1005 main st";
favRest.zipcode = 98686;
favRest.acceptsReservations = true;

favRest["numberOfStars"] = favRest["numberOfStars"] + 1;
favRest.favorited = true;
favRest.cuisines.push("Rice");

retrieveProperty = function (key) {
  if (favRest.hasOwnProperty(key) === true) {
    return favRest[key];
  } else {
    return "The information you requested does not exist.";
  }
};

console.log(retrieveProperty("name"));
