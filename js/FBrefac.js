$(document).ready(function() {
	
	var x = prompt('Please enter a number between 1 and 100');
	var y = parseInt(x);
	if (y === '') { // make sure input is not empty
		alert('Please enter something!');
		location.reload();
	}
	if (y % 1 !== 0) { // make sure input is not a decimal value
		alert('Please enter an integer!');
		location.reload();
	}
	if (y < 1) { // make sure input is not 0 or negative
		alert('I said, Please enter a number between 1 and 100!');
		location.reload();
	}

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
      		values.push(' ' +i);
    	}

    	} //end loop
	}// end function

fizzbuzz(y); // call the function
$('.answer p').text(values); // print the array 

}); // end document ready




