// const tinderUser = new Object() // Singleton Object
const tinderUser = {} // Non-Singleton Object
tinderUser.name = "Sammy"
tinderUser.id = "123abc"
tinderUser.isLoggedIn = true
// console.log(tinderUser);

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "Haider"
        }
    }
}

// console.log(regular.fullname.username.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
/*
Now i am going to try to merge multiple objects and return with a new object.

***1st method:-
const obj3 = { obj1, obj2 } => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
console.log(obj3);

***2nd method:-
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

***3rd method:- 
(🎉Preffered method) 
using the spread method 
const obj3 = {...obj1, ...obj2}

*/
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "Js with Chai&Code",
    price: "999",
    courseInstructor: "Hitesh"
}
const {courseInstructor: instructor} = course // destructuring_Object
console.log(instructor);
