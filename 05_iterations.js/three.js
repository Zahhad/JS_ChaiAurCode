/**
__NOTE__: Now we are going to deal with loops that sre specific to deal with arrays.

*/

// "for of" (loop)
const arr = [1, 2, 3, 4, 5]
// for (const index of arr) {
//     console.log(index);
    
// }

// maps

const map = new Map()
map.set('PK', 'Pakistan')
map.set('USA', 'United State of America')
map.set('CH', 'China')
map.set('FR', 'France')
map.set('CH', 'China') // map only holds uniqe value

// console.log(map);


for (const key of map) {
    console.log(key);
    
}
/*☝️
[ 'PK', 'Pakistan' ]
[ 'USA', 'United State of America' ]
[ 'CH', 'China' ]
[ 'FR', 'France' ]
     */

for (const [key, value] of map) { // syntax for separating keys & values 
    console.log(key, ':-', value);
    
}
/**
PK :- Pakistan
USA :- United State of America
CH :- China
FR :- France
 */

// const myGames = {
//     'game1': 'NFS',
//     'game2': 'GTA',
//     'game3': 'IGI',
//     'game4': 'COD'

// }

// for (const [game, value] of myGames) { // ___NOTE___: myGames is not iterateable by forOf loop
//     console.log(game, ':-', value);
    
// }