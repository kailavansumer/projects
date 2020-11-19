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

// var teamJohnAverage = (89 + 120 + 103) / 3;
// var teamMarkAverage = (116 + 94 + 123) / 3;
// var teamMaryAverage = (97 + 134 + 105) / 3;

// if (teamJohnAverage > teamMarkAverage && teamJohnAverage > teamMaryAverage) {
//   console.log("John's team is the winner with a score of " + teamJohnAverage);
//   console.log("Mark's team only scored " + teamMarkAverage);
//   console.log("Mary's team only scored " + teamMaryAverage);
// } else if (
//   teamMarkAverage > teamJohnAverage &&
//   teamMarkAverage > teamMaryAverage
// ) {
//   console.log("Mark's team is the winner with a score of " + teamMarkAverage);
//   console.log("John's team only scored " + teamJohnAverage);
//   console.log("Mary's team only scored " + teamMaryAverage);
// } else if (
//   teamMaryAverage > teamJohnAverage &&
//   teamMaryAverage > teamMarkAverage
// ) {
//   console.log("Mary's team is the winner with a score of " + teamMaryAverage);
//   console.log("John's team only scored " + teamJohnAverage);
//   console.log("Mark's team only scored " + teamMarkAverage);
// } else if (
//   teamJohnAverage === teamMaryAverage ||
//   teamJohnAverage === teamMarkAverage
// ) {
//   console.log(
//     "It's a draw with all teams scoring an average of " + teamJohnAverage
//   );
// }

/*
// Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = "1991";
const year = "2020";

//Old way of concatonating strings
const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

//ES6 now uses back ticks and the ${} notation to create complex strings
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

//old way of writing multiple lines uses the \n\ due to a bug in the language
const multipleLines = "String with \n\
multiple \n\
lines";
console.log(multipleLines);

//ES6 now uses backticks and the return key to create multiple lines easier
const multiLine = `String
with
multi
lines`;
console.log(multiLine);
*/

/*
// if/else statements

const age = 15;

if (age >= 18) {
  console.log("Sarah can start her driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2012;

//if/else control statements
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/*
//Code Challenge #2
var massMark = 82;
var massJohn = 82;
var heightMark = 1.7;
var heightJohn = 1.7;

var bmiMark = (massMark / heightMark) ^ 2;
var bmiJohn = (massJohn / heightJohn) ^ 2;

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else if (bmiJohn > bmiMark) {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
} else {
  console.log(
    `Mark's BMI (${bmiMark}) and John's BMI (${bmiJohn}) are the same.`
  );
}

*/

//Type conversion (explicit change) and coercion (automatically done by js)

const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);

// Truthy and falsey values
