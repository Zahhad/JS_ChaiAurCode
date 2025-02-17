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
console.log(Team);
