class UI{
	construction(){
		this.description = document.querySelector('#description')
		this.temp = document.querySelector('#temp')
		this.location = document.querySelector('#location')

	}
 drawWeather(data) {
	var celcius = Math.round(parseFloat(data.main.temp)-273.15);
	var description = data.weather[0].description;
	
	document.querySelector('#description').innerHTML = description;
	document.querySelector('#temp').innerHTML = celcius + '&deg;';
	document.querySelector('#location').innerHTML = data.name;
}
}