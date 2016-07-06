var startups = [
  "Uber",
  "Google",
  "Amazon",
  "Apple",
  "Facebook",
  "Twitter",
  "Instacart",
  "Favor",
  "Twilio",
  "Ride Austin",
  "Doughbies",
  "Braintree"
];

var ideas = [
  "Kittens",
  "Cars",
  "Clowns",
  "Insurance",
  "Clothes",
  "Food",
  "Hipsters",
  "Rubberbands",
  "Balloons",
  "Puppies",
  "Fried Chicken",
  "Coffee"
];

var random1 = Math.floor((Math.random() * startups.length)),
    random2 = Math.floor((Math.random() * ideas.length));

var statement = "A startup that is " + startups[random1] + " but for " + ideas[random2] + ".";

console.log(statement);
