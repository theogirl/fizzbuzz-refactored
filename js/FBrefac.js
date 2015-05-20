$(document).ready(function() {
	
	var x = prompt('Please enter a number');

	if (x == '') { // make sure input is not empty
		alert('Please actually enter something!');
		location.reload();
	}
	else if (x % 1 !== 0) { // make sure input is not a decimal value
		alert('Please enter an integer, no decimals!!');
		location.reload();
	}
	else if (x < 0) { // make sure input is not a negative value
		alert('Please enter a number between 1 and 100 only!');
		location.reload();
	}
	else if (x > 100) { // make sure input is not over 100
		alert('Please enter a number between 1 and 100 only!');
		location.reload();
	}
	else {
		var y = parseInt(x);
	};

	var values = new Array();

	function fizzbuzz(y) {
		for ( var i = 1; i <= y; i++ ) { // a looping function
    	if (i % 5 === 0 && i % 3 === 0) {
      		values.push(' Fizzbuzz');
   		 }
   		else if ( i % 3 === 0 ) {
      		values.push(' Fizz');
    	}
    	else if (i % 5 === 0) {
      		values.push(' Buzz');
    	}
    	else {
      		values.push(' '+i);
    	}

    	} //end loop
	}// end function

fizzbuzz(y); // call the function
$('.answer p').text(values); // print the array 

}); // end document ready




