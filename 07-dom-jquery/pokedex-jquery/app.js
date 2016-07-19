$(function() {
  var $pokemonNameField = $("#pokemon-name");
  var $addBtn = $("#add-pokemon");
  var $pokemonList = $("#pokemon-list");

  $addBtn.on("click", function() {
    var listItem = "<li>" + $pokemonNameField.val() + "</li>";
    $pokemonList.append(listItem);
  });
});
