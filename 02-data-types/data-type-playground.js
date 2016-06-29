// we always use the var keyword when declaring variables
// always use camelCase
// = is the assignment operator
var magician = "Gob Bluthe";
console.log(magician);

// typeof tells us what datatype we have
console.log(typeof 6);
console.log(typeof "Gob Bluthe");

// we get undefined when the variable does not
// have anything assigned
var magicianName;
console.log(magicianName);

// strings are used to store words or sentences
console.log("milk was a bad choice");

var name = "gob";
var message = "hello " + name + "!";
console.log(message);

// booleans are for yes or no data
// start booleans with is, are, or something that makes it read well
var isAvailable = true;

if(isAvailable) {
  // do something
}

// beware of floating decimals
var number = 0.1 + 0.2;
console.log(".1 + .2", number);

// remember PEMDAS when math
console.log(5 / (3 - 2) * 4);

// % is the modulo operator
// it tells us the remainder
console.log(15 % 7);

var radius = 2;
// circle area is pi *r squared
var area = Math.PI * Math.pow(radius, 2);
console.log("area of a circle with radius 2", area);

var x = 3;
x += 2; // is the same as x = x + 2
console.log(x); // 5

x *= 2; // is the same as x = x * 2
console.log(x); // 10

x /= 2; // is the same as x = x / 2
console.log(x); // 5

// the increment operator adds 1 to any number
var y = 0;
y++;
console.log("y = ", y); // y = 1

// the decrement operator subtracts 1 from any number
x--;
console.log("x = ", x); // x = 0;

var randomNumber = Math.random();
console.log(randomNumber);

// create a random number either 1 or 2
console.log(Math.floor(Math.random() * 2 + 1));

// array constructor
// with multiple parameters
// DON'T USE THIS
// var numbers = new Array(1, 2, 3, 4, 5);
// console.log(numbers);

// var numbers2 = new Array(3);
// console.log(numbers2);

// array literals are much cleaner for creating arrays
var moreNumbers = [1, 2, 3];
console.log(moreNumbers);

var multipleStrings = ["hello", "world"];
console.log(multipleStrings);

var randomArray = [true, 1, "bluthe"];
console.log(randomArray);

// the items in an arrays are called elements
// we can retrieve them using brakcets and it's position
var family = ["brian", "nicole", "sally"];
console.log(family[0]);
console.log(family[1]);
console.log(family[2]);

console.log(family.length);

family[99] = "gary";
console.log(family);
console.log("family.length", family.length);
console.log("family[50]", family[50]);

// use push when adding things to the end of an array
family.push("carol");
console.log(family);

// remove an element from the end of an array
console.log(family.pop());
console.log(family);

// we can use shift and unshift to work from the beginning of the array
// unshift "pushes on to the beginning"
// shift "pops off the beginning"
var extendedFamily = ["dave"];
console.log(extendedFamily);
extendedFamily.unshift("michael");
console.log("post shift", extendedFamily);

// use reverse to flip the contents of the array
extendedFamily.reverse();
console.log("reversed extended family", extendedFamily);

// we can join elements together using array.join
var productIds = [12, 34, 36, 7, 8, 99];
console.log("productIds", productIds);

var productIdString = productIds.join();
console.log("productIdString", productIdString);
