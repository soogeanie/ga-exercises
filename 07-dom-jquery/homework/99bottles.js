$("#beer-form").submit(function(event){
  event.preventDefault();

  totalBeers = $(this).find("#num-beers").val();

  countBeers(totalBeers);
});

function countBeers(totalBeers) {
  var $song_container = $("#song-container");

  // Loop through totalBeers for beers on the wall song
  for(var numBeers = totalBeers; numBeers >= 0; numBeers--) {
    var amtOfBeers = function(numBeers) {
      if(numBeers > 1 || numBeers === 0) {
        return numBeers + " bottles";
      } else {
        return numBeers + " bottle";
      }
    };

    var chime = amtOfBeers(numBeers) + " of beer on the wall, " + amtOfBeers(numBeers) + " of beer. Take one down and pass it around, " + amtOfBeers(numBeers - 1) + " of beer on the wall."

    if(numBeers >= 1) {
      var listItem = "<li>" + chime + "</li>";
      $song_container.append(listItem);
    } else {
      var lastBeer = "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, " + totalBeers.toString() + " bottles of beer on the wall."
      var lastLine = "<li>" + lastBeer + "</li>";

      $song_container.append(lastLine);
    }
  }
}

$("#reset-btn").on("click", function(){
  $("#song-container").find("li").remove();
});
