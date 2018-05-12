require("dotenv").config();
console.log("Hello1");
// var Twitter;
var keys = require("./keys.js");
console.log("Hello2");
// var spotify = new Spotify(keys.spotify);


// * `my-tweets`

var Twitter = require('twitter');

// var client = new Twitter({
//   consumer_key: '',
//   consumer_secret: '',
//   access_token_key: '',
//   access_token_secret: ''
// });

// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });

function twitter() {

  var twitterKeys = '';
  var client = new Twitter(twitterKeys);
  // var tweets = '';
  var params = {
    screen_name: 'Jim76494553',
    count: 10
  };

  client.get('statuses/user_timeline/', params, function (error,
    tweets, response) {
    if (!error) {


    }
  });
}

console.log("Hello3");

console.log(response);
console.log(tweets);




// * `spotify-this-song`
// var client = new Twitter(keys.twitter);
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <your spotify client id>,
  secret: <your spotify client secret>
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
// * `movie-this`

// * `do-what-it-says`