var family = ["alex", "brian"];
// var x = family.length;
//
// while(x) {
//   console.log(family[x - 1]);
//   x--;
// }

// for(var i = 0; i < family.length; i++) {
//   console.log(family[i]);
// }

// for(var i = family.length; i > 0; i--) {
//   console.log(family[i - 1]);
// }

// var x = 0;
// while(x < family.length) {
//   console.log(family[x]);
//   x++;
// }

// var beers = 99;
// while(beers > 0) {
//   console.log(beers + " on the wall");
//   beers--;
// }

// idx is short for index
family.forEach(function(element, idx, array) {
  console.log(element, idx, array);
});
