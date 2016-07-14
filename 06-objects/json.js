// var str = '{"data":{"type":"gif","id":"ROk2npu67RUNW","url":"http:\/\/giphy.com\/gifs\/hello-ROk2npu67RUNW","image_original_url":"http:\/\/media3.giphy.com\/media\/ROk2npu67RUNW\/giphy.gif","image_url":"http:\/\/media3.giphy.com\/media\/ROk2npu67RUNW\/giphy.gif","image_mp4_url":"http:\/\/media3.giphy.com\/media\/ROk2npu67RUNW\/giphy.mp4","image_frames":"175","image_width":"718","image_height":"404","fixed_height_downsampled_url":"http:\/\/media3.giphy.com\/media\/ROk2npu67RUNW\/200_d.gif","fixed_height_downsampled_width":"355","fixed_height_downsampled_height":"200","fixed_width_downsampled_url":"http:\/\/media3.giphy.com\/media\/ROk2npu67RUNW\/200w_d.gif","fixed_width_downsampled_width":"200","fixed_width_downsampled_height":"113","fixed_height_small_url":"http:\/\/media3.giphy.com\/media\/ROk2npu67RUNW\/100.gif","fixed_height_small_still_url":"http:\/\/media3.giphy.com\/media\/ROk2npu67RUNW\/100_s.gif","fixed_height_small_width":"178","fixed_height_small_height":"100","fixed_width_small_url":"http:\/\/media3.giphy.com\/media\/ROk2npu67RUNW\/100w.gif","fixed_width_small_still_url":"http:\/\/media3.giphy.com\/media\/ROk2npu67RUNW\/100w_s.gif","fixed_width_small_width":"100","fixed_width_small_height":"56","username":"","caption":""},"meta":{"status":200,"msg":"OK"}}';
//
// console.log(str);
//
// var giphyImg = JSON.parse(str);
//
// console.log(giphyImg);
//
// console.log("The type is " + giphyImg.data.type);
//
// console.log("The url is " + giphyImg.data.image_url);
//
// var myGiphy = {
//   type: giphyImg.data.type,
//   image_url: giphyImg.data.image_url
// };
//
// console.log(myGiphy);
//
// var myGiphyJSONString = JSON.stringify(myGiphy);
// console.log(myGiphyJSONString);

"use strict";

/**
 * JSON is a subset of the object literal notation of JavaScript; we use JSON
 * to transfer data between programs.
 *
 * ----  RULES ----
 *
 *   - Property names must be double-quoted strings;
 *   - trailing commas are forbidden.
 *   - Leading zeroes are prohibited;
 *   - a decimal point must be followed by at least one digit.
 *   - Most characters are allowed in strings, except certain control characters.
 *   - Strings must be double quoted.
 *   - No comments!
 *
 * More on JSON here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
 *
 */

// Although the following line isn't technically JSON (since it's actual JavaScript code)
// the object that's being saved inside `notActuallyJSON` is written in valid JSON syntax.
var notActuallyJSON = {
  "someKey": "someValue",
  "innerArray": [
    "alpha",
    "beta",
    "gamma",
    "delta"
  ]
};

// [ Step 1 ] Use jsonlint.com to determine if something is valid JSON.
// Copy the entire object above ({...}, but NOT 'var notActuallyJSON =' or the trailing semicolon)--just copy everything between the brackets, including the brackets themselves.
// Then go to http://jsonlint.com/ and paste it into the validator. Does it pass the test of being valid JSON?

// The following line is valid JavaScript, but the object is not written in valid JSON syntax.
// [ Step 2 ] Use JSONLint to validate the object in the following line; then, edit the object so it passes the validator.
var eddie = {
  "name":"Eddie Vedder",
  "age": 49
};

// We frequently want to turn a JavaScript object into a JSON string, and vice versa.
// JavaScript has a built-in global object called `JSON` that contains a number of useful methods for manipulating JSON.
//
// To turn a JS Object into JSON, use the .stringify method  ( JSON.stringify(someObject) )
//      (See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
//
// To turn a JSON string into a JS Object, use the .parse method  ( JSON.parse('some string') )
//      (See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
//
// [ Step 3 ] Turn the `grungeAlbums` JavaScript object into a JSON string, and store it in `grungeAlbumsJSON`.
// Then, convert `grungeAlbumsJSON` back into a JavaScript object. Is there a JSON method to help you do this? Check the docs.
// Compare it to the original `grungeAlbums` with `grungeAlbumsJSON` . Are they the same?

var grungeAlbums = {
  "albums":[
    {
        "name": "Bleach",
        "artist": "Nirvana",
        "unitsSold": 1700000
    },
    {
        "name": "Nevermind",
        "artist": "Nirvana",
        "unitsSold": 30000000
    },
    {
        "name": "In Utero",
        "artist": "Nirvana",
        "unitsSold": 15000000
    },
    {
        "name": "Ten",
        "artist": "Pearl Jam",
        "unitsSold": 10000000
    },
    {
        "name": "Vs",
        "artist": "Pearl Jam",
        "unitsSold": 6100000
    },
    {
        "name": "Vitalogy",
        "artist": "Pearl Jam",
        "unitsSold": 4770000
    }
  ]
};

var grungeAlbumsJSON = JSON.stringify(grungeAlbums);

var backToString = JSON.parse(grungeAlbumsJSON);

// [ Step 4 ] Take `grungeAlbumsJSON` and convert it back into a JavaScript object.
// Then, for each album in the list, do a console log printing out the album name, artist, and units sold.
// Each album should be formatted as follows:

//  Album: Album name
//  Artist: Artist name
//  Units sold: 31234


// [ Step 5 ] Create a custom JSON using the JSON validator from Step 1.
// Convert it back to a JavaScript object, change it, and then convert it back to JSON again. Compare it to your original - how has it changed?
