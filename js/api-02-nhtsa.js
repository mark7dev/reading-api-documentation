// ##### National Highway Transit Safety Administration
// https://vpic.nhtsa.dot.gov/api/

// 1. How many types of Chevrolet models are registered with the NHTSA?
var answerElement_nhtsa_1 = document.querySelector('#nhtsa-1');

var API_URL_V1 = 'https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/chevrolet?format=json'

request
.get(API_URL_V1)
.then(function(response) {
    var cars = response.body.Results;
    answerElement_nhtsa_1.textContent = cars.length;
})


// 2. What are the vehicle types that Nissan has?
var answerElement_nhtsa_2 = document.querySelector('#nhtsa-2')

var API_URL_V2 = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/nissan?format=json'

request
.get(API_URL_V2)
.then(function(response) {
    var carsType = response.body.Results;
    
    carsType.forEach(function(carType) {
        answerElement_nhtsa_2.innerHTML += '<p>' + carType.VehicleTypeName + '</p>';
    })
})


// 3. What are the types of models that exist for Toyota trucks in 2017?
var answerElement_nhtsa_3 = document.querySelector('#nhtsa-3')

var API_URL_V3 = 'https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/toyota/modelyear/2017/vehicleType/truck?format=json'

request
.get(API_URL_V3)
.then(function(response) {
    var carsType2017 = response.body.Results;
    
    carsType2017.forEach(function(carType2017) {
        answerElement_nhtsa_3.innerHTML += '<p>' + carType2017.Model_Name + '</p>';
    })
})
