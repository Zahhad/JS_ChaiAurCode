/* in the official documentation of js all the datatypes are categorized into 2 types based on the way they are stored and retrieved.*/
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

let appliances = ["fan", "light", "iron", "cooker", "vacum"]
let myObj = {
    name: "zahhad",
    age: 22,

}
const myfunc = function(){
    console.log("Hello World!")
}
console.log(typeof appliances)

/*
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       
       */