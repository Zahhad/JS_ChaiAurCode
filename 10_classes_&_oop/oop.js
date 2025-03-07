const UserInfo = {
    username: "Xahad!",
    logInCount: 9,
    signedIn: true,
    
    getUserDetails: function(){
        console.log(`Username: ${username}`); // reference of username is not defined
        console.log(`Username: ${this.username}`); // now it is correctly referenced
        console.log(this); // it will help us see the current context
        
        
    }
}
// console.log(UserInfo.username);
// console.log(UserInfo.getUserDetails());


function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    return this
}

/*
const userOne = User("Xahad!", 11, true)
const userTwo = User("Haider", 1, false)

if we do not use the "new" constructor we will endup overwriting the previous value in the "User"

"console.log(userOne);" =>   username: 'Haider', loginCount: 1, isLoggedIn: false

*/

const userOne = new User("Xahad!", 11, true)
const userTwo = new User("Haider", 1, false)

console.log(userOne);
console.log(userTwo);
 
