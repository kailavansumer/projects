'use strict';

function calcAge(birthYear) {
  const age = 2020 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }
  }
  printAge();
  return age;
}

const firstName = 'Kaila';
calcAge(1994);
