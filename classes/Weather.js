class Weather{
	constructor(city) {
		this.key = '10ed3bdf99d81facf362c6aa87f1ef4e';
		this.city = city;
		this.data = {}
	}
	async getWeather(){
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
		const responseData = await response.json();
		return responseData;
	}

	changeCity(city){
		this.city = city;
	}
}