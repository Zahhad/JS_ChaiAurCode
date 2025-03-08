function setUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    setUsername.call(this,  username)
    this.email = email
    this.password = password
}
const user1 = new createUser("Xahad~", "example@azs.com", "1234")
console.log(user1);
