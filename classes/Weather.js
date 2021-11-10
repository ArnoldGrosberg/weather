class Weather{
	constructor(city){
		this.key = '10ed3bdf99d81facf362c6aa87f1ef4e';
		this.city = city;
		
	}

	async getWeather(){
		const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
		const responceData = await responce.json()
		console.log(responceData);
		return responceData
	}

	changeCity(city){
		this.city = city;
	}
}