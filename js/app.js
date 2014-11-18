

$(document).ready(function(){
//	count 1 to supplied number
// user input
// input string to number

var pickanumber = parseInt(prompt ("Enter a number from 1-100"));
console.log(pickanumber);
// error for NaN
if (pickanumber) {
	alert('Thank you');
}
else {
	alert("This is not a number! Please reload and try again.");
}
// optional error for decimal

var upto = pickanumber + 1;
console.log(upto);

	for (var i = 1; i < upto; i++) {
//  if not divisible by 15 go on, else = fizz buzz
		if (i % 15) {	
//  if not divisible by 3 go on, else = fizz 
			if (i % 3) {
//  if not divisible by 5 go on, else = buzz
				if (i % 5) {
// everything else = number
					$('.list').append('<p>'+i+'</p>');
				}
				else {
					$('.list').append('<p>buzz</p>');
				}
			}
			else {
				$('.list').append('<p>fizz</p>');
			}
		}
		else {
			$('.list').append('<p>fizz buzz</p>');
		}
	}
})