// Set total beers here
var totalBeers = 99;

// Loop through totalBeers for
// beers on the wall song
for(numBeers = totalBeers; numBeers >= 0; numBeers--) {
  var amtOfBeers = function(numBeers) {
    if(numBeers > 1 || numBeers === 0) {
      return numBeers + " bottles";
    } else {
      return numBeers + " bottle";
    }
  };

  var chime = "\n" + amtOfBeers(numBeers) + " of beer on the wall, " + amtOfBeers(numBeers) + " of beer. Take one down and pass it around, " + amtOfBeers(numBeers - 1) + " of beer on the wall."

  if(numBeers >= 1) {
    console.log(chime);
  } else {
    console.log("\nNo more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, " + totalBeers.toString() + " bottles of beer on the wall.");
  }
}
