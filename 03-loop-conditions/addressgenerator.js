street_number = ["1100", "1322", "100", "4646", "625"];

street_name = [
  "Stassney Ln",
  "Van Ness Ave",
  "S Lamar Blvd",
  "Huron St",
  "Mueller Blvd"
];

city = [
  "Austin",
  "Chicago",
  "San Francisco",
  "Houston",
  "Columbus"
];

state = [
  "Texas",
  "Alabama",
  "California",
  "Illinois",
  "Ohio"
];

zip = ["78704", "94012", "78745", "60642", "78723"];

var randomElem = function(arrayName) {
  return (arrayName[Math.floor(Math.random() * arrayName.length)]);
};

var address = randomElem(street_number) + " "  + randomElem(street_name) + " " + randomElem(city) + " " + randomElem(state) + " " + randomElem(zip)

console.log(address);
