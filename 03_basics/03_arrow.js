const user = {
    username: "zahad",
    price: 999,
    welcomUser: function () {
        console.log(`${this.username}, welcome to our website.`); // we use the "this" keyword to reference the current context. 
        console.log(this);
        
        
    }   
}
// user.welcomUser()
// user.username = "haider"
// user.welcomUser()

// console.log(this); // this gives => {} (i.e an empty object) bcz we are in the node env

function chai(){
    let username = "Haider"
    console.log(username); // this will work
    console.log(this.username); // this will give=> undefined bcz "this" only works for objects.
    
}
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(2, 1));


const addTwo = (num1, num2) => (num1 + num2) // implicit function (i.e. alternative of the above way of writing function)

console.log(addTwo(2, 1));
/*
🤔when we use "{}" to write a function we use return keyword and when we use "()" we don't need to write return keyword (i.e. implicit function) 
*/

const myArray = [1, 2, 3, 4, 5]
// myArray.forEach( function() {} ) // explicit function
// myArray.forEach( () => () ) // implicit function