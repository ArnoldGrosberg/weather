document.addEventListener('DOMContentLoaded', cityWeather)

function weatherDataFetch(city){
	var key = '10ed3bdf99d81facf362c6aa87f1ef4e'
	fetch(`https://openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
	.then(function(resp){
		return resp.json()
	}) // Convert data to json
	.then(function(data){
		console.log(data);
	})
	.catch(function(){
		// catch any errors
	});
}

function cityWeather(e) {
	weatherDataFetch('Tallinn');
}