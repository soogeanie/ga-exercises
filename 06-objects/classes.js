// var myTruck = new Vehicle(2014, 65000);
// var myTruck2 = new Vehicle(2013, 45000);
// var myTruck3 = new Vehicle(2012, 9999);
//
//
// console.log(myTruck);
// console.log(myTruck2);
// console.log(myTruck3);
//
// // Constructor Function
// function Vehicle(year, mileage) {
//   this.year = year;
//   this.mileage = mileage;
// }

function Pokemon(type, level) {
  this.type = type;
  this.level = level;
}

Pokemon.prototype.levelUp = function() {
  this.level++;
}

var pikachu = new Pokemon("electric", 10);
// var squirtle = new Pokemon("water", 15);

console.log("pikachu", pikachu);
// console.log("squirtle", squirtle);

pikachu.levelUp();
console.log("pikachu", pikachu);
