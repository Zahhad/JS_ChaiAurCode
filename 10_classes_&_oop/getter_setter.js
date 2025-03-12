class User{
    constructor(email, password){
        this.email = email, 
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `Encrypted****word`
    }
    set password(value){
        this._password = value
    }
}
const intovert = new User("example@some.com", "qwer1234")
console.log(intovert.password);
// the gettter & setter comes in hand when we do not want to give access of some property or to add conditions to request the property.(example of property could be "intovert.password")
console.log(intovert.email);
