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

/*
const friends = ["Michael", "Aaron", "Joe"];

// Add an element to the end of the array and store the value of the array in the variable newLength
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

// Add an element to the beginning of the array
friends.unshift("John");
console.log(friends);

// Remove last element
friends.pop();
console.log(friends);

// Remove first element
friends.shift();
console.log(friends);

console.log(friends.indexOf("Aaron"));

console.log(friends.includes("Steven"));

*/

/*
// Function Coding Challenge 2

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

const bills = [125, 556, 44];
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];
console.log(tips);

const total = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[bills.length - 1] + tips[tips.length - 1],
];
console.log(total);
*/

// Objects

/*

const jonas = {
  firstName: "Jonas",
  lastName: "Guy",
  age: "2020 - 1991",
  job: "teacher",
  friends: ["Michael", "Steven", "Joe"],
};

// Object Dot Notation vs Brackets

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["last" + nameKey]); // Calculated names only work with bracket notation, not dot notation

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}.`
);
*/

/*
const jonas = {
  firstName: "Jonas",
  lastName: "Guy",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Steven", "Joe"],
  hasDriversLicense: false,
  calcAge: function () {
    return 2020 - this.birthYear;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    } and has ${this.hasDriversLicense ? "a" : "no"} driver's license
    .`;
  },
};

// console.log(jonas.calcAge());
// console.log(jonas["calcAge"](1991));

// console.log(
//   `${jonas.firstName} is a ${jonas.calcAge()} year old ${jonas.job} and has ${
//     jonas.hasDriversLicense ? "a driver's license" : "no driver's license"
//   }.`
// );
console.log(jonas.getSummary());
*/
