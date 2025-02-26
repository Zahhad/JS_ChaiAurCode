// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


const balance = 999
if (balance < 500) {
    console.log("Balance is less than 500.");
}else if (balance < 750) {
    console.log("Balance is less than 750.");
}else if (balance < 1000) {
    console.log("Balance is less than 1000.");
}

const userLoggedIn = true
const debitCard = true
if (userLoggedIn && debitCard) {
    console.log("Allow to buy course.");
    
}

const loggedFromGoogle = false
const loggedFromEmail = false
const loggedFromFacebook = false
if (loggedFromEmail || loggedFromFacebook || loggedFromGoogle) {
    console.log("Allow to login.");
    
}