/*
##### Geocoding
1. What are latitude longitude coordinates of Montreal?
  - https://maps.googleapis.com/maps/api/geocode/json?address=Montreal

2. What time does the sun set in Montreal (based on the Google geocode coordinates)?
  - https://sunrise-sunset.org/api

3. What is the weekly weather forecast in Montreal?
  - https://darksky.net/dev
  - Note: You will have to create an account.

*/


//========================================================================
//  (1) What are latitude longitude coordinates of Montreal?
//
//     - https://developers.google.com/maps/documentation/geocoding/start
//     = NOtE: You don't need an API key for this api
//

const answerElement_apimashup_1 = document.getElementById('apimashup-1')

var API_URL_G1 = 'https://maps.googleapis.com/maps/api/geocode/json?address=Montreal'

request
  .get(API_URL_G1)
  .then(function(response) {
    var information = response.body.results;
    information.forEach(function(date) {
      var lat = date.geometry.location.lat;
      var lng = date.geometry.location.lng;

      answerElement_apimashup_1.innerHTML += '<p>Lat: ' + lat + '</p>' + '<p>Lng: ' + lng + '</p>';
    })
  })



//========================================================================
//  (2) What time does the sun set in Montreal (based on the Google geocode coordinates)?

function getSunset(latitude, longitude) {

	const answerElement_apimashup_2 = document.getElementById('apimashup-2')

    var API_URL_G2 = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today`;

    request
    .get(API_URL_G2)
	  .then(function(response){
		  var information = response.body.results;
		  var sunsetTime = information.sunset;
		  answerElement_apimashup_2.innerHTML += '<p>Sunset: ' + sunsetTime + '</p>';	
		})
}


request
  .get('https://maps.googleapis.com/maps/api/geocode/json?address=Montreal')
  .then(function(response){
    var information = response.body.results
    information.forEach(function(date){
    	var lat = date.geometry.location.lat;
    	var lng = date.geometry.location.lng;
    	getSunset(lat, lng);						   
    });
  })




//========================================================================
//  (3) What is the weekly weather forecast in Montreal? (look for summary property in 'daily')

function getWeather(latitude, longitude) {

	const answerElement_apimashup_3 = document.getElementById('apimashup-3')

	var API_KEY = '012be0be9ed18413001495614a5fac78';
    var API_URL_G3 = `https://api.darksky.net/forecast/${API_KEY}/${latitude},${longitude}`;

    request
    .get(API_URL_G3)
	  .then(function(response){
		  var information = response.body;
		  var weather = information.daily.summary;
		  answerElement_apimashup_3.innerHTML = '<p>' + weather + '</p>';
		})
}

request
  .get('https://maps.googleapis.com/maps/api/geocode/json?address=Montreal')
  .then(function(response){
    var information = response.body.results
    information.forEach(function(date){
    	var lat = date.geometry.location.lat;
    	var lng = date.geometry.location.lng;
    	getWeather(lat, lng);						   
    });
  })


//
