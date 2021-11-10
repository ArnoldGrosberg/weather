class LS {
	constructor(){
		this.city;
		this.defaultCity ='Tallinn';
	}
	getLocationData(){
		if(localStorage.getItem('item') == null){
			this.city = this.defaultCity;
		} else {
			this.city = localStorage.getItem('city');
		}
		return this.city;
	}
}