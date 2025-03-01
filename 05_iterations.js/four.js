const horLine = "--------------------------"
/**
__NOTE__: Now we are going to deal with loops that sre specific to deal with objects.

*/

// "for in" (loop)
const myObject = {
    'js': 'JavaScript',
    'cpp': 'C++',
    'rb': 'Ruby',
    'swift': 'Swift by Apple',
    'py': 'Python'
}
 for (const key in myObject) {
    console.log(key);
    
 }
/**
js
cpp
rb
swift
py
 */
console.log(horLine);

for (const key in myObject) {
    console.log(myObject[key]);
    
 }
/**
JavaScript
C++
Ruby
Swift by Apple
Python
 */
console.log(horLine);

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}.`);
    
}