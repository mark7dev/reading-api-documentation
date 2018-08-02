//========================================================================
// (1) How many births were there in Iceland's national hospital today?

const answerElement_iceland_1 = document.getElementById('iceland-1')

request.get('https://apis.is/hospital')
  .then(function(serverRes){
    let apiJsonData = serverRes.body
    console.log(apiJsonData)
    answerElement_iceland_1.innerHTML = apiJsonData.results[0].birthNumbers
  })



//========================================================================
// (2) What is the next concert event in Iceland?
const answerElement_iceland_2 = document.getElementById('iceland-2')

var API_URL2 = 'http://apis.is/concerts'

request
.get(API_URL2)
.then(function(response) {
  var concert = response.body.results;
  answerElement_iceland_2.textContent = concert[0].eventDateName;
})



//========================================================================
// (3) How many **arrival** flights are scheduled for today?
const answerElement_iceland_3 = document.getElementById('iceland-3')

var API_URL3 = 'https://apis.is/flight?language=en&type=departures'

request
.get(API_URL3)
.then(function(response) {
  var flights = response.body.results;
  answerElement_iceland_3.textContent = flights.length;
})


//
