var init = function() {
	alert('It works!');
	
	fetch('/data.json')
	.then(function(response) {
		return response.json();
	})
	.then(function(myJson) {
		console.log(JSON.stringify(myJson));
	});
}

document.addEventListener('DOMContentLoaded', init);
