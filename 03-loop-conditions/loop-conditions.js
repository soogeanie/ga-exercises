var age = 20;

if(age >= 21) {
  console.log("What's your order?");
} else {
  console.log("no booze for you");
}

// ternary operator
// condition ? true : false;
age = 40;
var message = (age >= 21) ?
  "Whats your order?":
  "no booze for you";
console.log("ternary " + age + " " + message);

// type coercion
console.log('4 < "6" , 4 < "6"');
console.log("ga < GA", 'ga' < "GA");
console.log("GA < ga", 'GA' < "ga");

// capital letters are great than small letters
console.log("'alex' < 'brian', 'alex' < 'brian'");

// == equality operator: checks value, coerces other value to the right type
// === identity operator: checks value AND type. !You should always use this!
console.log('"dog" === "dog"', "dog" === "dog"); // true
console.log('"5" == 5', "5" == 5); // true
console.log('"5" === 5', "5" === 5); // false


// equality and identity work differently with arrays and objects
var family = ["alex", "brian"];
var family2 = ["alex", "brian"];
console.log(family === family2); // false!
// because there are different array INSTANCES

// Falsey Values
// false, 0, "" (empty string), NaN, null, undefined
// TIP: think in terms of "emptiness" for remembering if a value is falsey
var name = "";
if(name) {
  console.log("Your name is: ", name);
} else {
  console.log("You don't have a name!");
}

// && (and) || (or)
var person;
var person = {};

if(person && person.name) {
  console.log("name: ", person.name);
}
