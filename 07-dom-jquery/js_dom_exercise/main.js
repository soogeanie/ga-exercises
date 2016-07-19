/* Independent Practice

Making a favorites list: DOM manipulation

- When the user clicks the submit button, take the value they've typed
  into the input box and add it to the list (remember: appendChild)

- Also, when a new item is added to the list, clear the input box.
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

Bonus:

When they click submit without typing anything, alert the user
"you must type in a value!"

*/

function addToList(list, listItemText) {
  var newListItem = document.createElement("li");
  var newItemText = document.createTextNode(listItemText);

  newListItem.appendChild(newItemText);
  list.appendChild(newListItem);
};

window.onload = function() {
  var button = document.getElementById("new-thing-button");
  var favList = document.getElementById("fav-list");
  var newItemInput = document.getElementById("new-thing");

  button.onclick = function(event) {
    event.preventDefault();

    var newItemValue = newItemInput.value;

    if(newItemValue === "") {
      alert("You must type in a value!")
    } else {
      addToList(favList, newItemValue);
      newItemInput.value = "";
    }
  };
};
