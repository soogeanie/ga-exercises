var vwGolf =  {
  color: "white",
  mileage: 43000,
  year: 2014
};

console.log(vwGolf);
console.log("My car has " + vwGolf.mileage + " miles.");
console.log("The color is " + vwGolf.color + ".");

// got a paint job
vwGolf.color = "pink";

console.log("The new color is " + vwGolf.color + ".");

// vwGolf.numWheels = 4; or vwGolf["num-wheels"] = 4;
vwGolf["num-wheels"] = 4;

console.log("My car has " + vwGolf["num-wheels"] + " wheels");
