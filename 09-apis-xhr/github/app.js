window.addEventListener('load', function() {
  var githubBtn = document.getElementById('github-btn');
  var customBtn = document.getElementById('custom-btn');

  githubBtn.addEventListener('click', function() {
    getURL('https://api.github.com/users/soogeanie');
  });

  customBtn.addEventListener('click', function() {
    getURL('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=robots');
  });

  function getURL(url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = handleXHR;
    xhr.open('GET', url);
    xhr.send();
  }

  function handleXHR() {
    if(this.readyState === XMLHttpRequest.DONE) {
      switch(this.status){
        case 200:
          console.log(this.responseText);
          break;
        default:
          console.log(this.status, 'error');
      }
    }
  }
});
/**
 * SECOND TIME AROUND
 */

//   githubBtn.addEventListener('click', function() {
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//       if(this.readyState === XMLHttpRequest.DONE) {
//         switch(this.status){
//           case 200:
//             console.log('success');
//             break;
//           default:
//             console.log(this.status, 'error');
//         }
//       }
//     }
//     xhr.open('Get', 'https://api.github.com/users/soogeanie');
//     xhr.send();
//   });
//
//   customBtn.addEventListener('click', function() {
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//       if(this.readyState === XMLHttpRequest.DONE) {
//         switch(this.status){
//           case 200:
//             console.log('success');
//             break;
//           default:
//             console.log(this.status, 'error');
//         }
//       }
//     }
//     xhr.open('Get', 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC');
//     xhr.send();
//   });
// });

/**
 * First time around
 */

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//   if(this.readyState === XMLHttpRequest.DONE) {
//     var githubBtn = document.getElementById('github-btn');
//     var customBtn = document.getElementById('custom-btn');
//
//     githubBtn.addEventListener('click', function(){
//       if(xhr.status === 200) {
//         var data = JSON.parse(xhr.responseText);
//         console.log('success', data);
//       } else {
//         console.log('fail!', xhr.status);
//       }
//     });
//   }
// }
// xhr.open('Get', 'https://api.github.com/users/soogeanie');
// xhr.send();
//
// var pokemonAPI = new XMLHttpRequest();
// pokemonAPI.onreadystatechange = function() {
//   console.log('hello');
//   if(this.readyState === XMLHttpRequest.DONE) {
//     var githubBtn = document.getElementById('github-btn');
//     var customBtn = document.getElementById('custom-btn');
//
//     customBtn.addEventListener('click', function(){
//       console.log('hello');
//       if(pokemonAPI.status === 200) {
//         var data = JSON.parse(pokemonAPI.responseText);
//         console.log('success', data);
//       } else {
//         console.log('fail!', pokemonAPI.status);
//       }
//     });
//   }
// }
// pokemonAPI.open('Get', 'http://pokeapi.co/api/v2/pokemon-form/1/');
// pokemonAPI.send();
