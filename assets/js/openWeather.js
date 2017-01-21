/* global $ */
//api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a49a791f66b41c7fb7a2162af497d85c
//var  apikey = 'a49a791f66b41c7fb7a2162af497d85c';

$("#city-search").submit(function(e){
	e.preventDefault();
	e.currentTarget.value = "";
	var cityName = $("#city-name").val();
	getWeather(cityName);
});
function getWeather(city){
	$.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&APPID=a49a791f66b41c7fb7a2162af497d85c", function (data) {
	$("#city").html(data.name + ', ');
	$("#country").html(data.sys.country);
	$('.new-icon').addClass("wi-owm-" + data.weather[0].id);
	$("#temp").html(data.main.temp.toFixed(0) + '°C');
	});
}

$.get("http://api.openweathermap.org/data/2.5/weather?q=Berlin&units=metric&APPID=a49a791f66b41c7fb7a2162af497d85c", function(data) {
	getCurrentWeather_de();
})
	var currentWeather_de = $("#currentCity-de").val();
	var getCurrentWeather_de = function() {
		$.get("http://api.openweathermap.org/data/2.5/weather?q=Berlin&units=metric&APPID=a49a791f66b41c7fb7a2162af497d85c", function (data) {
	 	$("#city").html(data.name + ', ');
	 	$("#country").html(data.sys.country);
	 	$('#icon-de').addClass("wi-owm-" + data.weather[0].id);
	 	$("#temp").html(data.main.temp.toFixed(0) + '°C');
	});
}

$.get("http://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&APPID=a49a791f66b41c7fb7a2162af497d85c", function(data) {
	getCurrentWeather_fr();
})
	var currentWeather_fr = $("#weather-fr").val();
	var getCurrentWeather_fr = function() {
		$.get("http://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&APPID=a49a791f66b41c7fb7a2162af497d85c", function (data) {
	 	$("#paris").html(data.name + ', ');
	 	$("#fr").html(data.sys.country);
	 	$('#icon-fr').addClass("wi-owm-" + data.weather[0].id);
	 	$("#temp-fr").html(data.main.temp.toFixed(0) + '°C');
	});
}

$.get("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=a49a791f66b41c7fb7a2162af497d85c", function(data) {
	getCurrentWeather_gr();
})
	var currentWeather_gr = $("#weather-gr").val();
	var getCurrentWeather_gr = function() {
		$.get("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=a49a791f66b41c7fb7a2162af497d85c", function (data) {
	 	$("#london").html(data.name + ', ');
	 	$("#gr").html(data.sys.country);
	 	$('#icon-gr').addClass("wi-owm-" + data.weather[0].id);
	 	$("#temp-gr").html(data.main.temp.toFixed(0) + '°C');
	});
}

$.get("http://api.openweathermap.org/data/2.5/weather?q=Madrid&units=metric&APPID=a49a791f66b41c7fb7a2162af497d85c", function(data) {
	getCurrentWeather_es();
})
	var currentWeather_es = $("#weather-es").val();
	var getCurrentWeather_es = function() {
		$.get("http://api.openweathermap.org/data/2.5/weather?q=Madrid&units=metric&APPID=a49a791f66b41c7fb7a2162af497d85c", function (data) {
	 	$("#madrid").html(data.name + ', ');
	 	$("#es").html(data.sys.country);
	 	$('#icon-es').addClass("wi-owm-" + data.weather[0].id);
	 	$("#temp-es").html(data.main.temp.toFixed(0) + '°C');
	});
}



