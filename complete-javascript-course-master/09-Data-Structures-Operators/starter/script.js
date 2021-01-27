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
