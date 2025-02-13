const name = "Zahhad"
console.log(name);

const repoCount = 7
// console.log(name + repoCount + " Value"); ____This is functional but not used in modern day js programming
console.log(`Hi, my name is ${name} & my repo count is ${repoCount}.`);

const gamename = new String('No_baby!')
console.log(gamename.length);
console.log(gamename.__proto__); // this gives us a string of all the methods we could use for a string.e.g

console.log(gamename.toUpperCase());
console.log(gamename.indexOf('a'));
console.log(gamename.charAt(7));
console.log(gamename.substring(0, 4)); // target specific characters of a string 
console.log(gamename.slice(-7, 4));// target specific characters of a string && can take negative values
console.log(gamename.replace('_', ' '));
console.log(gamename.split('_')); // comes up with an array after separating string from the given character

