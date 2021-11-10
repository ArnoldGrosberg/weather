// LS object - for location data
const ls = new LS();

// weather object - init location
const weather = new Weather('Tallinn');
// UI object
const ui = new UI();
// init location data
const weatherLocation = ls.getLocationData();
console.log(weatherLocation);


//const city = document.getElementById('submit-btn');
const city = document.querySelector('input').value;
const input = document.querySelector('input').value;

// change city and get weather data
// city.addEventListener('click', weather.changeCity());         change-city
const form = document.querySelector('#city-name');
form.addEventListener('submit', changeCityWeather());
console.log(form + " " + city + " " + input);
// city.addEventListener('submit', changeCityWeather());
changeCityWeather();
function changeCityWeather(){
	console.log("city0" + " " + city);
	weather.changeCity(city); 
	// getWeather();
	// document.querySelector('form').value = ''
	// event.preventDefault();
}


// get city weather and display it
function getWeather() {
	weather.getWeather()
	.then(data => {
		ui.drawWeather(data)
	})
	.catch(error => console.log(error));
}

document.addEventListener('DOMContentLoaded', getWeather);
