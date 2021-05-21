
var location
let appId = "api key";
let units = "metric";

function weatherinfo(location) {
	console.log(location);
	fetch('http://api.openweathermap.org/data/2.5/weather?q='+location+'&APPID=api_key&units=metric').then(result => {
		return result.json();
	}).then(result => {
		init(result);
		})
}

function init(result) {
	console.log(result);

	document.getElementById("city").innerHTML = result.name;
	document.getElementById("temp").innerHTML = Math.floor(result.main.temp) + "&#176";
	document.getElementById("temp_desc").innerHTML = result.weather[0].description;
	document.getElementById("wind").innerHTML = "Windspeeds at: " + result.wind.speed + 'm/s';
	document.getElementById("humidity").innerHTML = "Humidity levels: " + result.main.humidity + '%';
}

function getinfo() {
	var location = document.getElementById("location").value;
	console.log(location);

	if(location){
		weatherinfo(location);
	}

}
