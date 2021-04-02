 
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://google-search3.p.rapidapi.com/api/v1/images/q=tesla",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "4cd634d839msh9fac1a044959048p1f4306jsn69a2763ad331",
		"x-rapidapi-host": "google-search3.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
})
;