$(function () {
  var $loginBtn = $('#login');
  var $logoutBtn = $('#logout');
  var $signInView = $('.sign-in-view');
  var $imageResultsView = $('.image-results-view');
  var $imageContainer = $('.images');

  // initialize the SDK with our API key
  _500px.init({
   sdk_key: '1a624074fba4a06deb73391adff2be888f18d740'
  });

  // logging a user in
  $loginBtn.click(function() {
    _500px.login();
  });

  // this doesn't do anything
  // no documentation on 500px
  // on how to log out
  // $logoutBtn.click(function() {
  //   _500px.on('logout', function() {
  //     $signInView.show();
  //     $imageResultsView.hide();
  //   })
  // });

  // If the user has already logged in & authorized your application,
  // this will get the user authorization status
  // and keep the site from prompting the user to log in
  // each time the page is refreshed
  _500px.getAuthorizationStatus();

  _500px.on('authorization_obtained', function() {
    $signInView.hide();
    $imageResultsView.show();

    // if user is logged in,
    // show their username in the nav
    _500px.api('/users', function (response) {
        $('#username').append(response.data.user.fullname);
    });

    // check if geolocation is available in the browser
    if(navigator.geolocation) {
      // if it is available,
      // use getCurrentPosition to get the computer's location
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        var radius = '25mi';

        var searchParams = {
          geo: lat + ',' + long + ',' + radius,
          rpp: 28,
          image_size: 3,
          sort: 'highest_rating'
        };

        _500px.api('/photos/search', searchParams, function(response) {
          console.log(response);

          var photos = response.data.photos;

          for(var i = 0; i < photos.length; i++) {
            $imageContainer.append($('<img/>', {
              class: 'image',
              src: photos[i].image_url
            }));
          }
        });
      });
    } else {
      console.warn('browser doesnt support geolocation');
    }
  });
});
