// console.log(Math.PI); 
/*
PI in js is considered a universal constant and it's value is not mutable. It is too hard coded and there is soo many checks to ensure that its value cannot be changed.
Actually the properties we see in the prototype are not *All the properties regarding that dataType. 
For Example in case of Math.PI which is an object we get these 
  writable: false,
  enumerable: false,
  configurable: false
as elaborated by the code below: 
*/

const furtherDescription = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(furtherDescription);


const chai = {
    name: "Adrak Chai",
    price: 250, 
    isAvailable: true
}
console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai, "name"))
/**
 {
  value: 'Adrak Chai',
  writable: true,
  enumerable: true,
  configurable: true
}
 */

// we can change these properties in *Some cases like below
Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: true
})

// Now lets see the changed vlues
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// lets try to test that *Can we change the value of chai.name
chai.name = "Masala Chai"
chai.price = 280

console.log(chai);
// name property was *Not changed but the price was changed
