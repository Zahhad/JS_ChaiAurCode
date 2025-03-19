tasks = ["Buy groceries", "Complete project", "Call John"];
const index = tasks.indexOf("Call")
console.log(index); // if index cannot find the element it gives *-1*


tasks.forEach((task) => {
    console.log(`${task} is completed.`);
    
});

const jsonString = '{"name":"Alice","age":25,"city":"New York"}';

const user = JSON.parse(jsonString);
// Converts a JavaScript Object Notation (JSON) string into an object.

console.log(user);

const newUser = JSON.stringify(user)
//Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
console.log(newUser);


let array = [1,2,3,4,5,6,7,8,9,10]
const greater = array.filter(function(element) {
    return element > 5;
});

console.log(greater);
