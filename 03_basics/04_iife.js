/*____Immediately Invoked Function Expressions (IIFE)
 to avoid global scope's pollution we use IIFE it immediately execute the function. 
 The syntax is like this "()()", in the 1st parenthesis for the functions's logic and the 2nd one is for te execution.
*/ 

// following is a general example of a function 
function chai(){
    console.log(`DB-Connected 1`); 
}
chai(); // might show err due to not-knowing the extent of the function context so putting a semi-colon becomes necessity.

(function chai(){ // this is a named iife
    console.log(`DB-Connected Two`); 
})(); // here the iife is executing but might show err due to not-knowing the extent of the function context so putting a semi-colon becomes necessity.

( () => { // this is an un-named iife
    console.log(`DB-Connected Three`);
})();

// now with examples with some parameters e.g name

(function chai(name){
    console.log(`DB-Connected Two ${name}`); 
})("zahhad");

( (name) => {
    console.log(`DB-Connected Three ${name}`); 
})("zahhad");