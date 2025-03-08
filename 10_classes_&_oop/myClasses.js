// ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword () {
//         return `${this.password}abc` 
//     }

//     capitilize () {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const myself = new User("Xahad~", "xahad@mail.com", "123")
// console.log(myself);
// console.log(myself.encryptPassword());
// console.log(myself.capitilize());


// behind the scene

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc` 
}

User.prototype.capitilize = function () {
    return `${this.username.toUpperCase()}` 
}

const tea = new User("tea~", "tea@mail.com", "123")
console.log(tea);
console.log(tea.encryptPassword());
console.log(tea.capitilize());