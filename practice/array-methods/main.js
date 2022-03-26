/* Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased. */

function camelize(str) {
    let array = str.split('-');
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        if (i == 0) {
            newArray.push(array[i]);
        } else {
            newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
        }
    }
   return newArray.join('');
}

console.log(camelize("my-short-string"));


function camelCase(str) {
    return str.split('-').map((word, index) => index == 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

console.log(camelCase("just-my-luck"));

/* We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.*/


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}


const sumUp = (obj) => {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
}

console.log(sumUp(salaries));

/* Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here. */


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

const multiplyNumeric = (obj) => {
    for (let key in obj) {
        if ((typeof obj[key]) == "number") {
            obj[key] = obj[key] * 2;
        }
    }
}

multiplyNumeric(menu);
console.log(menu);



