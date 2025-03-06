fetch('https://something.com')
.then(/* if fetch is successful the response comes into then */)
.catch(/* if there is an error */)
.finally(/* it will run no matter what */)


// PROMISE is an object representing the eventual completion or failure of an asynchronous operation.
const promiseOne = new Promise( function (resolve, rejection) {
    // Do an async task// DataBase calls// Cryptography// Network 
    setTimeout(() => {
        console.log("Async task is complete");
        resolve()
    }, 1000);
} )

promiseOne.then(function(){ // this ".then" is related to the resolve parameter in the above promise function
    console.log("Promise consumed");
    
})

// now lets write the above promise in a quick way
new Promise(function (resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2 is complete");
        resolve()
    }, 1000);
    
}).then(function () {
    console.log("Promise 2 is consumed")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve({username: "Xahad!", email: "hzahhad@gmail.com"})
    }, 1000);
})
// bcz of the reolve() method we can automatically access the data in the .then function
promiseThree.then(function (user) {
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username: "Xahad!", passwrod: "123", email: "hzahhad@gmail.com"})
        } else {
            reject('ERROR: Something went wrong!')
        }
        
    }, 1000);
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
    
})
.then((username)=>{
    console.log(username);
    
})
.catch(function(x){
    console.log(x)
})
.finally(function(){
    console.log("Promise is either resolved or rejected. I WILL RUN");
    
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username: "JavaScript!", passwrod: "123", email: "something@example.com"})
        } else {
            reject('ERROR: Js went wrong!')
        }
        
    }, 1000);
})

async function consumePromiseFive(params) {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("ERROR: ", error);
        
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users') 
.then((response)=> {
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log("Error occurred:", error);
})
