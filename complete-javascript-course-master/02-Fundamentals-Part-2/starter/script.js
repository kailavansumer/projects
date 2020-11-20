/* //Strict mode and errors

"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive`);
*/

/*
// Functions

function logger() {
  console.log(`My name is Jonas`);
}

// Calling, running, or invoking the function

logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

// Function Declarations vs Expressions

/*
// Declaration
function calcAge1(birthYear) {
  return 2020 - birthYear;
}

const age1 = calcAge1(1994);
console.log(age1);


// Expression
const calcAge2 = function (birthYear) {
  return 2020 - birthYear;
};

const age2 = calcAge2(1994);
console.log(age2);
*/

/*
// Arrow Functions
const calcAge3 = (birthYear) => 2020 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2020 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1994, "Kaila"));
*/

/*
// Functions calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
// Function Review

const calcAge = function (birthYear) {
  return 2020 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
  //   return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1994, "Kaila"));
console.log(yearsUntilRetirement(1924, "Mike"));
*/

/*
// Function Coding Challenge #1

const calcAverage = (scoreOne, scoreTwo, scoreThree) =>
  (scoreOne + scoreTwo + scoreThree) / 3;

//Test 1
let dolphinScore = calcAverage(44, 23, 71);
let koalasScore = calcAverage(65, 54, 49);
console.log(dolphinScore, koalasScore);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphin's win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`Neither team has enough points to win.`);
  }
};

checkWinner(dolphinScore, koalasScore);

//Test 2
dolphinScore = calcAverage(85, 54, 41);
koalasScore = calcAverage(23, 34, 27);
console.log(dolphinScore, koalasScore);

checkWinner(dolphinScore, koalasScore);
*/

/*
// Arrays

const friend1 = "Michael";
const friend2 = "Aaron";
const frined3 = "Joe";

const friends = ["Michael", "Aaron", "Joe"];

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Kaila";
const lastName = "VanSumer";
const birthYear = "1994";
const age = 2020 - birthYear;
const kaila = [firstName, lastName, age, friends];
console.log(kaila);

*/
