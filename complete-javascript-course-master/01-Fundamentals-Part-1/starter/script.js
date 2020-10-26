/* var massMark = 100;
var massJohn = 79;
var heightMark = 2.1;
var heightJohn = 1.7;

var bmiMark = massMark / heightMark^2;
var bmiJohn = massJohn / heightJohn^2;

var isMarkFat = bmiMark > bmiJohn;

console.log("Is Mark's bmi higher than John's bmi?" + ' ' + isMarkFat); */

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log (firstName + ' is married!');
// }

// else {
//     console.log (firstName + ' is not married.');
// }
// var age = 16;
// var firstName = 'john'

// age <=21 ? console.log(firstName + ' drinks juice.')
// : console.log(firstName + ' drinks beer.');


var teamJohnAverage = (89 + 120 + 103)/3;
var teamMarkAverage = (116 + 94 + 123)/3;
var teamMaryAverage = (97 + 134 +105)/3;


if (teamJohnAverage > teamMarkAverage && teamJohnAverage > teamMaryAverage) {
    console.log('John\'s team is the winner with a score of ' + teamJohnAverage);
    console.log('Mark\'s team only scored ' + teamMarkAverage);
    console.log('Mary\'s team only scored ' + teamMaryAverage);
}
else if (teamMarkAverage > teamJohnAverage && teamMarkAverage > teamMaryAverage) {
    console.log('Mark\'s team is the winner with a score of '+ teamMarkAverage);
    console.log('John\'s team only scored ' + teamJohnAverage);
    console.log('Mary\'s team only scored ' + teamMaryAverage);
} 
else if (teamMaryAverage > teamJohnAverage && teamMaryAverage > teamMarkAverage) {
    console.log('Mary\'s team is the winner with a score of '+ teamMaryAverage);
    console.log('John\'s team only scored ' + teamJohnAverage);
    console.log('Mark\'s team only scored ' + teamMarkAverage);
} 

else if (teamJohnAverage === teamMaryAverage || teamJohnAverage === teamMarkAverage) {
    console.log('It\'s a draw with all teams scoring an average of ' + teamJohnAverage);
}





































