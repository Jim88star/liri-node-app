require("dotenv").config();
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});





// var Twitter = require('twitter');
// this is how we import the twit package
var config = require('./keys.js') //this is we import the config 
// file which is a js file which contains the keys ans tokens
// var T = new Twitter(config);
//this is the object of twit which 
// will help us to call functions inside it
var params = {
  q: 'Jim76494553',
  count: 20
} // this is the param variable which will have key and value 
// ,the key is the keyword which we are interested in searching and count
// is the count of it
// T.get('search/tweets', params, searchedData); 
client.get('search/tweets', params, searchedData); 


// T.get('search/tweets', params, searchedData); // get is the 
// function to search the tweet which three paramaters 'search/tweets'
// ,params and a callback function.
function searchedData(err, data, response) {
  console.log(data);
} // searchedData function is a callback function which 
// returns the data when we make a search