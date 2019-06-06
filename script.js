var init = function() {
	console.log('It works!');
	
	fetch('/data.json')
	.then(function(response) {
		return response.json();
	})
	.then(function(myJson) {
		console.log(myJson.text);
	});
}

document.addEventListener('DOMContentLoaded', init);
