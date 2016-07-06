// function randomNumber() {
//   var random = (Math.ceil(Math.random() * 6)).toString();
//   return random;
// }
//
// document.getElementById("roll-dice").onclick = function() {
//   var firstDie = "dice dice-" + randomNumber();
//   var secondDie = "dice dice-" + randomNumber();
//
//   document.getElementById("first-die").className = firstDie;
//   document.getElementById("second-die").className = secondDie;
// };

document.getElementById("roll-dice").onclick = function() {
  var numDice = Array.from(document.getElementsByClassName("dice"));

  numDice.forEach(function(element) {
    var dice = Math.ceil(Math.random() * numDice.length);
     element.className = "dice dice-" + dice;
  });
}
