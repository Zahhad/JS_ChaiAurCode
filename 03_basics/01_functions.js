// functions 

function sayMyName(){
    console.log("Z");
    console.log("a");
    console.log("h");
    console.log("a");
    console.log("d");
}
// sayMyName()

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}
//addTwoNumbers() // NaN (Not A Number)
//addTwoNumbers(1) // Nan (Not A Number)
//addTwoNumbers(1, 1) // 2
//addTwoNumbers(1, 1, 1) // 2
//addTwoNumbers(1, null) // 1
// Lets try to console the result of this function
// const result = addTwoNumbers(5, 5)
// console.log(result); 
// 👆it gives undefined bcz we have not gives the return functionality to the function. Lets write another function with return functionality.

function sumTwoNumbers(n1, n2){
    // let sum = n1 + n2
    return n1 + n2
}
const sum = sumTwoNumbers(3, 5)
// console.log("Result: ", sum);


function loginUserMessage(username = "Noa"){
    if(/*username === undefined or */!username){
        console.log("Please Enter a valid Username.");        
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("zahhad")); // zahhad just logged in
//console.log(loginUserMessage()); // undefined just logged in


/*
function calculateCarPrice(num1){
    return num1
}
console.log(calculateCarPrice(2));
But what if we are expecting more than one value instead of only num1 for that 
we use spread operater e.g given below 👇:
*/
function calculateCartPrice(/*value1, value2,*/ ...num){
    return num
}
console.log(calculateCartPrice(699, 1099, 1300, 1499, 1649));

const user = {
    username: "xahad!",
    email: "hzahhad@gmail.com",
    price: 999
}

function handleObject(anyObject){
    console.log(`User: ${anyObject.username} is registered with this email: ${anyObject.email} and has bought goods with price of ${anyObject.price}.`);
    
}
handleObject(user)
handleObject({
    username: "Haider",
    email: "Hiader@gmail.com",
    price: 1099
})

const myNewArray = [100, 200, 300, 400, 500]
function getSecondValue(getArray){
    return console.log(getArray[1]);

}
getSecondValue(myNewArray)
getSecondValue([10, 79, 36, 40, 58])