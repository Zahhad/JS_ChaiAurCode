const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newNums = myNumbers.map( (num) => num + 10)
console.log(newNums);


// Chainging (i.e using multiple methods)
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
myNums = myNumbers
    .map( (num) => num * 10)
    .map( (num) => num + 1)
    .filter( (num) => num >= 50)
console.log(myNums);
