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

/*
//Type conversion (explicit change) and coercion (automatically done by js)

const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
*/

/*
// Truthy and falsey values
//Falsey values: 0, '', undefined, null, and NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 0;

if (money) {
  console.log(`Don't spend it all`);
} else {
  console.log(`You should get a job.`);
}

let height;

if (height) {
  console.log(`Height is defined`);
} else {
  console.log(`Height is undefined`);
}

*/

/*
// Equality operators

const age = "18";

if (age === 18) console.log(`You just became an adult! (strict)`);

if (age == 18) console.log(`You just became an adult! (loose)`);

const favorite = Number(prompt("what's your favorite number?"));
console.log(favorite);

if (favorite === 23) {
  console.log(`Cool! ${favorite} is a great number.`);
} else if (favorite === 22) {
  console.log(`${favorite} is alright, but 23 is better.`);
}

if (favorite !== 23) {
  console.log(`Why isn't 23 your favorite number?`);
}

*/

/*
//logical operators

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);

const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log(`Sarah is able to drive.`);
// } else {
//   console.log(`Someone else should drive...`);
// }

const isTired = false;
console.log(hasGoodVision && hasDriverLicense && isTired);

if (hasGoodVision && hasDriverLicense && !isTired) {
  console.log(`Sarah is able to drive.`);
} else {
  console.log(`Someone else should drive...`);
}
*/
/*
//Code Challenge #3

let dolphinScoreAverage = (96 + 108 + 89) / 3;
let koalasScoreAverage = (88 + 91 + 110) / 3;

if (dolphinScoreAverage > koalasScoreAverage) {
  console.log(
    `The Dolphins won the competition with an average score of ${dolphinScoreAverage}!`
  );
} else if (dolphinScoreAverage < koalasScoreAverage) {
  console.log(
    `The Koalas won the competition with an average score of ${koalasScoreAverage}!`
  );
} else if (dolphinScoreAverage === koalasScoreAverage) {
  console.log(`It was a tie.`);
}

dolphinScoreAverage = (109 + 95 + 90) / 3;
koalasScoreAverage = (109 + 95 + 90) / 3;

if (dolphinScoreAverage > koalasScoreAverage && dolphinScoreAverage > 100) {
  console.log(
    `The Dolphins won the competition with an average score of ${dolphinScoreAverage}!`
  );
} else if (
  dolphinScoreAverage < koalasScoreAverage &&
  koalasScoreAverage > 100
) {
  console.log(
    `The Koalas won the competition with an average score of ${koalasScoreAverage}!`
  );
} else if (
  dolphinScoreAverage === koalasScoreAverage &&
  dolphinScoreAverage > 100 &&
  koalasScoreAverage > 100
) {
  console.log(`It was a tie and both teams had sufficient points.`);
} else {
  console.log(`Neither team had enough points to win.`);
}
*/

// const day = prompt(`What day is it?`);

// switch (day) {
//   case "monday":
//     console.log(`Plan courses`);
//     console.log(`Go to coding meetup`);
//     break;
//   case "tuesday":
//     console.log(`Prepare theory video`);
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log(`Write code examples`);
//     break;
//   case "friday":
//     console.log(`Record videos`);
//     break;
//   case "saturday":
//   case "sunday":
//     console.log(`Enjoy the weekend`);
//     break;
//   default:
//     console.log(`Not a valid day`);
// }
/*
if (day === "monday") {
  console.log(`Plan courses`);
  console.log(`Go to coding meetup`);
} else if (day === "tuesday") {
  console.log(`Prepare theory video`);
} else if (day === "wednesday" || day === "thursday") {
  console.log(`Write code examples`);
} else if (day === "friday") {
  console.log(`Record videos`);
} else if (day === "saturday" || day === "sunday") {
  console.log(`Enjoy the weekend`);
} else {
  console.log(`Not a valid day`);
}
*/

/*

//Conditional/Ternary operators
const age = prompt(`What is your age?`);

age >= 18 ? console.log(`I drink wine 🍷`) : console.log(`I drink water 💦`);

const drink = age >= 18 ? "wine 🍷" : "water 💦";
console.log(drink);

console.log(`I like to drink ${drink}`);
*/

const bill = prompt(`How much did you pay for your meal?`);

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const total = Number(bill) + Number(tip);
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value was ${total}`
);
