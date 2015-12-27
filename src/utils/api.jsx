var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '73c79cca4f421be';

module.exports = window.api = {
	get: function(url) {
		return fetch(rootUrl + url, {
			headers: {
				'Authorization': 'Cliend-ID ' + apiKey
			}
		})
		.then(function (response) {
			return response;
		})
	}
}
