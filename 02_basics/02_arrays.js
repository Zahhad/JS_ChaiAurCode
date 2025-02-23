const marvHeroes = ["spiderman", "ironman", "arrow"]
const dcHeroes = ["superman", "flash", "batman"]

// marvHeroes.push(dcHeroes) // it will return an array with the other array as part of the first array
// console.log(marvHeroes);

const allHeroes = marvHeroes.concat(dcHeroes) // it will return a single array which is union of both the arrays
console.log(allHeroes);

/*
there is a better and more flexible way to concat 2 or more arrays called *spread 
*/

const Team = [...marvHeroes, ...dcHeroes] // preffered way to do it
// console.log(Team);

const another_array = [1,2,3,[4,5,6],7,[7,[8,9]]]
// console.log(another_array.flat(2)); // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. 

console.log(Array.isArray("Zahhad"))
console.log(Array.from("Zahhad"))
console.log(Array.from({name: "Zahhad"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));