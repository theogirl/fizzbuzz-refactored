$(document).ready(function() {
	
	var i = prompt('Please enter a number');
	var input = parseInt(i);
	if (i === '') {
		alert('Please enter something!');
		location.reload();
	};
	if (i % 1 != 0) {
		alert('Please enter an integer!');
		location.reload();
	}
	$('.answer').text(input);
}); // end document ready




