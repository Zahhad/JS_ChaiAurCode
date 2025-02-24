let a = 11
console.log("a's value in global scope: ", a);

if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("a's value in local scope: ", a);
    
}
// console.log(a); // a is not defined 
// console.log(b); // b is not defined
// 👆bcz it is defined in local scope and we are calling it in the gloable scope
console.log("this value of c is not meant to show in this scope: ", c); // using var creates scope realated issues

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // this can be accessed here

function addone(num){
    return num + 1
}



addTwo(5) // this will not be accessed here
const addTwo = function(num){ 
    return num + 2
}