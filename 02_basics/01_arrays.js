// arrays

const myArr = [0,1,2,3,4]
const yourArr = ["hamza_S", "zahhad", "hamza_A"]
const arr2 = new Array(44, 33, 22, 11, 0o0)

// console.log(arr2[2])  // 22
// console.log(typeof myArr) // object

// _________Array methods_________
// myArr.push(5)         // add at the last of an array
// myArr.pop()          // removes from the last of the array
// console.log(myArr);

// myArr.unshift(9)         // add at the start of an array
// myArr.shift()         // removes from the start of the array
// console.log(myArr);

// console.log(myArr.includes(5)); // checks if value exists or not (Boolean result)
// console.log(myArr.indexOf(4));  // tells the index of the value & if value don't exists, it gives -1
// console.log(myArr.indexOf(9));    // gives -1

// const newarr = myArr.join() // Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(newarr);


/*
_________slice & splice________
⦾ slice does not change the original array *but splice does.
⦾ slice does not include the range of array *but splice does.
*/
console.log("A: Original array ", myArr);

const myArr_1 = myArr.slice(1, 4)
console.log(".slice ", myArr_1);
console.log("B: Original array after slice ", myArr);

const myArr_2 = myArr.splice(1, 4)
console.log(".splice ", myArr_2);
console.log("C: Original array after splice ", myArr);
