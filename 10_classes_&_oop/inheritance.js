class User {
    constructor(username, fullname){
        this.username = username
        this.fullname = fullname
    }

    logMe (){
        return `USERNAME is ${this.username}`;
        
    }

}

class Teacher extends User {
    constructor(fullname, username, email, password) {
        super(username, fullname)
        this.email = email
        this.password = password
    }

    addCourse(){
        return `This course was added by ${this.fullname}.`
    }
}

const myTeacher = new Teacher("Ajmal Nagra", "nagra", "ajmalNagra@gmail.com", "qwert123")
// console.log(myTeacher);
// console.log(myTeacher.addCourse());

const venerable = new User("fangU", "Fang Yuan")
console.log(venerable.logMe()); 

console.log(myTeacher === venerable); // false
console.log(myTeacher instanceof Teacher); // true
console.log(venerable instanceof User); // true

