var pokemonNameField = document.getElementById("pokemon-name");
var addBtn = document.getElementById("add-pokemon");
var pokemonList = document.getElementById("pokemon-list");

addBtn.onclick = function() {
  var newListItem = document.createElement("li");

  newListItem.innerHTML = pokemonNameField.value;
  // console.log(newListItem);

  pokemonList.appendChild(newListItem);
}
