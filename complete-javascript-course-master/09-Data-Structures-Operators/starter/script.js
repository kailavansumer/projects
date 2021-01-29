// 'use strict';
// const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// // const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const arr = [2, 3, 4];
// const a = arr[0];

// const [x, y, z] = arr;
// console.log(x, y, z);

// const [first, second] = restaurant.categories;
// console.log(first, second);

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const { sat, ...weekdays } = { ...restaurant.openingHours };
// console.log(weekdays);

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

/*
// Coding Challenge #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Create an array of players for each team
const [players1, players2] = game.players;

// Create a gk variable for first team player and an array for the remaining field players
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// Create an array of all players from both teams
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// Create new array including sub players for team 1
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// Create variables for the odds
const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// Create a function that prints the number of goals based on the number of arbitrary player names passed into the function (not an array)
const printGoals = function (...playerNames) {
  console.log(...playerNames);
  console.log(playerNames.length);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmish');
printGoals(...game.scored);

const winner = team1 < team2 || 'Team 2 wins!';
console.log(winner);
*/
/*
// Coding Challenge #2
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels', 'Lewandowski'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Print which goal was scored by which player
const goalScorers = game.scored.entries();

for (const [goalNum, player] of goalScorers) {
  console.log(`Goal ${goalNum + 1}: ${player}`);
}

// Use a loop and print the average odds
const oddsArr = Object.values(game.odds);
const findOddsAverage = arr => {
  const sum = arr.reduce((x, y) => x + y);
  // let newNum = 0;
  // for (const odd of arr) {
  //   newNum += odd;
  // }
  console.log(sum / arr.length);
};

findOddsAverage(oddsArr);

//

const gameArr = Object.entries(game);
Object.entries(game.odds);

// for (const [team, [x, odd]] of gameArr) {
//   console.log(`Odds of victory ${team}: ${odd} `);
// }

console.log(`Odds of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odds of draw: ${game.odds.x}`);
console.log(`Odds of victory ${game.team2}: ${game.odds.team2}`);

console.log(game.scored);

const scorer = {};
const createScorer = arr => {
  arr.forEach(player => {
    if (!scorer[player]) {
      scorer[player] = 1;
    } else {
      scorer[player] = scorer[player] + 1;
    }
  });
  return scorer;
};

console.log(createScorer(game.scored));
// create a function that returns an object
// iterate over game.scored
//  is value a property of {}? no? push value to object as property and give a key of 1 yes? add 1 to exisitn key
// check how many times a name shows up in the array
// add that player and the amount of goals to the object

// Sets
const orderSet = new Set([
  'Pizza',
  'Pasta',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
*/
/*
// Coding Challenge #3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Create an array of the events that happened in the game without any duplicates
/*
const events = [];
for (const [key, value] of [...gameEvents]) {
  events.push(value);
}
let uniqueEvents = new Set(events);
uniqueEvents = [...uniqueEvents];

// Refactored using map.values()
const events = [...new Set(gameEvents.values())];

// Remove illegal event from game events log
gameEvents.delete(64);

// Print sentence using average of events
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes.`
);

// Loop over gameEvents and log each element noting whether it was in the first half of the game or the second

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF]${min}: ${event}`);
}
*/

/*

// CS50 Print a reverse pyramid
//  #
// ##
//###
// I freaking solved it! Woohoo! Solved 1/27/21 after ~3 hours of working on it

// Print a pyramid given a height
let str = '';
const printPyramid = height => {
  for (let i = 0; i < height; i++) {
    str = str + '#';
    console.log(str);
  }
};
printPyramid(3);

// Print a reverse pyramid given a height
let newStr = '';
let i;
let j;
const reversePyramid = height => {
  for (i = height - 1; i >= 0; i--) {
    for (j = 0; j < height; j++) {
      if (j < i) {
        newStr += ' ';
      } else {
        newStr += '#';
      }
    }
    console.log(newStr);
    newStr = '';
  }
};

reversePyramid(5);
*/

// Coding Challenge #4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const makeCamel = str => {
  let capital = str.indexOf('_') + 1;
  let newStr =
    str.toLowerCase().slice(0, str.indexOf('_')) +
    str[capital].toUpperCase() +
    str.slice(str.indexOf('_') + 2, str.length);
  console.log(newStr);
};

let someStr = ' Some_Variable';
makeCamel(someStr);

// .toLowerCase()
//     .toUpperCase[str.indexOf('_' + 1)].replace('_', '');
