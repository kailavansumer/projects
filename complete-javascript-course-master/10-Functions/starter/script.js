'use strict';
/*
const createBooking = function (flightNum, numPassengers, price) {
  const booking = {
    flightNum,
  };
};

const addTax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
*/

// Print the options for the user on their own line
const printNewLine = arr => {
  for (const items of arr) {
    return `${arr.join('\n')}\n(Write option number)`;
  }
};

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    let userInput;
    document.querySelector('.poll').addEventListener('click', () => {
      userInput = prompt(`${this.question}\n${printNewLine(this.options)}`);
      if (userInput >= 0 && userInput <= 3) {
        this.answers[userInput] += 1;
        console.log(this.answers);
      }
    });
  }, //end of registerNewAnserfunction
  displayResults: function (type) {
    if (typeof type == 'array') {
      console.log(type);
    } else {
      let cleanStr = type.replaceAll('[', '').replaceAll(']', '');
      console.log(`Poll results are ${cleanStr}`);
    }
  },
}; //end of object poll

poll.registerNewAnswer();
