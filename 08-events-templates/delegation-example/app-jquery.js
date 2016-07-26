$(function() {
  var $delegate = $("#two");

  $delegate.on("click", "button", function(e) {
    console.log(e.target.id + " clicked");
  });
});
