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


const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    typeof answer === 'number' &&
      answer < this.options.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results is ${this.answers.join(', ')}`);
    }
  },
};

poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

  */

// Coding Challenge #2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document
    .querySelector('body')
    .addEventListener('click', () => (header.style.color = 'blue'));
})();
