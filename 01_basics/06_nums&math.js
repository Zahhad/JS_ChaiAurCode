const score = 9
// console.log(typeof score);

const balance = new Number(999)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);

let afterTax = balance/7
// console.log(afterTax);
// console.log(afterTax.toFixed(2));

const hundreds = 1000000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));



//  ___________Maths___________

// console.log(Math);
// console.log(Math.abs(-7)); // Modulus function. make anything positive.
// console.log(Math.round(4.6)); // rounds off
// console.log(Math.ceil(4.6)); // rounds-up
// console.log(Math.floor(4.6)); // rounds-down
// console.log(Math.min(4, 3, 2, 1, 0, -1)); // finds the minimum value
// console.log(Math.max(4, 3, 2, 1, 0, 8)); // finds the maximim value

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min));