// for
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("It is number 5's msg.");
        
    }
    // console.log(element);
    
}

for (let i = 21; i <= 30; i++) {
    const element = i;
    // console.log(`Outer Loop value ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(i + ' x ' + j + ' = ' + i*j);
        

    }
    
}

let meArray = ["spiderman", "superman", "batman"] // length = 3
for (let i = 0; i < meArray.length; i++) {
    const element = meArray[i];
    // console.log(element);
    
}

// break & continue
for (let index = 0; index <= 5; index++) {
    if (index == 3) {
        console.log("Number 3 is detected");
        break;
    }
    const element = [index];
    console.log(`Value of 'i' is ${index}`);
    
}
/*
Value of 'i' is 0
Value of 'i' is 1
Value of 'i' is 2
Number 3 is detected 
--𝙗𝙧𝙚𝙖𝙠 will cause the loop to exit when the condition is met.
 */

for (let index = 0; index <= 5; index++) {
    if (index == 3) {
        console.log("Number 3 is detected");
        continue;
    }
    const element = [index];
    console.log(`Value of 'i' is ${index}`);
    
}
/*
Value of 'i' is 0
Value of 'i' is 1
Number 2 is detected 
Value of 'i' is 3
Value of 'i' is 4
Value of 'i' is 5
--𝘾𝙤𝙣𝙩𝙞𝙣𝙪𝙚 will cause the loop to do what it is asked to do when the condition is met instead of the normal pattern it was performing. 
🄽🄾🅃🄴 if we do not use break or continue and just define an if condition it will work something like
Value of 'i' is 0
Value of 'i' is 1
Number 2 is detected
Value of 'i' is 2
 */