// reduce

const myNumbers = [1, 2, 3]
let initialValue = 0
let myTotal = myNumbers.reduce( function (acc, currval) {
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, initialValue)
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const cartTotal = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

// console.log(cartTotal);


 // +++++++++++++++Practice exercise+++++++++++++++++
//  const numbers = [10, 20, 30, 40, 50]
//  const totalNumbers = numbers.reduce( (acc, currval) => acc + currval, 0)
// console.log(totalNumbers);

const numbers = [45, 12, 78, 34, 89, 23, 90, 101];
const maxNum = numbers.reduce( (max, num) => (num > max ? num :max), numbers[0])
console.log(maxNum);
/**
 above mentioned "(num > max ? num :max)" is a ternary operator which is a short form of if else statement, if it was to be converted to a simple if-else it would look like:

 if (num > max) {
    return num;
} else {
    return max;
}

 */