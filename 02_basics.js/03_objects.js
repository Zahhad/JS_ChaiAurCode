// singleton 
// Object.create

// object literals 
const mySym = Symbol("myKey")
const JsUser = {
    name: "Hassan",
    FullName: "Hassan Ali",
    age: 21, 
    location: "Lahore",
    email: "hassan@gmail.com",
    isLoggedIn: false,
    LastLoggedIn: "1 day & 7 hours ago",
    mySym: "myValue",
    [mySym]: "myValue" // Notation to set the key in a specific dataType
}

// console.log(JsUser.email);
// console.log(JsUser.FullName);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "ali@gmail.com" // Changed value of email in Jsuser object
console.log(JsUser.email);

// Object.freeze(JsUser) // No Change can occur in object now
JsUser.email = "Haider@gmail.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log(`Hello JsUser!, ${this.name}`); // we use "this." to reference the same object
}

console.log(JsUser.greeting); // [Function (anonymous)]
// ☝️ Function is not executed but only referenced
console.log(JsUser.greeting());
