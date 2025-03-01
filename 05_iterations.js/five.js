const coding = ["ruby", "python", "javascript", "C++", "java"]

coding.forEach(function (item){
    // console.log(item);
    
})

// now using arrowFunction
coding.forEach( (lang) => {
    // console.log(lang);
} )

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
    
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => { // this function runs for each item ~ Object than moves on to the other object
    console.log(item.languageName);
    // console.log(item.languageFileName);
    
})