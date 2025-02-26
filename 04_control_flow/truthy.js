/*
___Falsy values___
false, 0, -0, "", BigInt 0n, null, undefined, Nan

___Truthy Values____
true, "0", "false", " ", {}, [], function(){} 
*/



// An example which showcase an issue that [] gives true value
const userEmail = []

// if (userEmail) {
//     console.log("Got user email"); // empty array is a truthy value
// } else {
//     console.log("Don't have user email");
// }

// How to check for an empty array ?
// if (userEmail.length == 0) {
//     console.log("Array is Empty.");
    
// }

const emptyObj = {}
// if (Object.keys(emptyObj).length === 0 ) { //Object.keys(emptyObj) this gives an *Array
//     console.log("Object is Empty")
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 15 ?? 10 // if no value is null or undefined it choses the first value
val1 = null ?? 10
val1 = undefined ?? 20

console.log(val1);

// Terniary Operator
// ___SYNTAX___:  condition ? true : false

const pepsiPrice = 150
pepsiPrice >= 150 ? console.log("Pepsi's Price is Greater than 149.") : console.log("Pepsi's Price is Lesser than 150.");

