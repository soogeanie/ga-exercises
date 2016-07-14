/**
 * Work with a partner to create a monkey object, which has the following properties:
 *
 *   name
 *   species
 *   foodsEaten
 *
 * And the following methods:
 *
 *   eatSomething(thingAsString)
 *   introduce(): produces a string introducing itself, including its
 *                name, species, and what it's eaten.
 *
 * Instructions:
 *
 * Create 3 monkeys total.
 * Make sure all 3 monkeys have all properties set and methods defined.
 * Exercise your monkeys by retrieving their properties and using their methods.
 *
 * Practice using both syntaxes for retrieving properties (dot notation and brackets).
 */

function Monkey(name, species) {
  this.name = name;
  this.species = species;
  this.foodsEaten = [];
}

var jack = new Monkey("Jack", "Oragutan");
var henry = new Monkey("Henry", "Gorilla");
var gerald = new Monkey("Gerald", "Snow Monkey");

Monkey.prototype.eatSomething = function(food) {
  this.foodsEaten.push(food)
}

Monkey.prototype.introduce = function() {
  var eaten;

  if(!this.foodsEaten.length) {
    eaten = "nothing";
  } else {
    eaten = this.foodsEaten.join(", ");
  }

  console.log("Hello, my name is " + this.name + " and I am a " + this.species + " monkey. Recently, I have eaten " + eaten + ".");
}

jack.eatSomething("mangoes");
jack.eatSomething("strawberries");
henry.eatSomething("kale");
henry.eatSomething("spinach");
gerald.eatSomething("snow");
gerald.eatSomething("shaved ice");

jack.introduce();
henry.introduce();
gerald.introduce();

var myMonkeyJSONString = JSON.stringify(jack);
console.log(myMonkeyJSONString);
