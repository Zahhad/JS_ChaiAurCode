// const coding = ["java", "ruby", "python", "javascript", "C++", "java"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
    
// })

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums_1 = myNums.filter( (nums) => nums > 4)
/**
 * __NOTE__: when we use {} to start a block-scope then in order to retrun values we have to explicitly use the "return" keyword.
*/
const newNums_2 = myNums.filter( (nums) => {
    return nums > 2 && nums < 9
} )
// console.log(newNums_1);
// console.log(newNums_2);


const newNums = []
myNums.forEach( (nums) => {
    if (nums>3) {
        newNums.push(nums)
    }
})
// console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre == 'History')
//   console.log(userBooks);
  
  userBooks = books.filter( (bk) => {
    return bk.publish >= 1990 && bk.genre === "History"
})
  console.log(userBooks);
  