// old approach to use set && get properties
function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, "email", {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, "password", {
        get: function(){
            return `encrypted${this._password}`
        },
        set: function(value){
            this._password = value
        }
    })
}

const myUser = new User("raat@subah.com", "qwerty321")
console.log(myUser.email);
