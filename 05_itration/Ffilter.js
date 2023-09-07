const myNums=[1,2,3,4,5,6,7,8,9,10]
// let newNums=myNums.filter( (num)=> num>4)
// console.log(newNums);


// or
// let newNums=myNums.filter( (num)=> {
//     return num>4
// })


// for each

// const newNums = []
// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// });
// console.log(newNums);


const books = [
    {totle: 'Book One', gener: 'Fiction', publish:1981, addition: "2004"},
    {totle: 'Book Two', gener: 'Poetry', publish:1881, addition: "2001"},
    {totle: 'Book Three', gener: 'Non-Fiction', publish:1981, addition: "2002"},
    {totle: 'Book Four', gener: 'Fiction', publish:1999, addition: "2003"},
    {totle: 'Book Five', gener: 'History', publish:1967, addition: "2005"},
    {totle: 'Book Six', gener: 'Sceince', publish:1998, addition: "2006"},
    {totle: 'Book Seven', gener: 'Geigrasphy', publish:1932, addition: "2007"},
    {totle: 'Book Eight', gener: 'Non-Fiction', publish:1954, addition: "2008"},
    {totle: 'Book Nine', gener: 'Physics', publish:1988, addition: "2009"},
    {totle: 'Book Ten', gener: 'Litrature', publish:1989, addition: "2010"}
]

let userBooks = books.filter( (bk) => bk.gener==='Physics')
userBooks = books.filter( (bk) => {return bk.publish>=1985 && bk.gener==="Sceince"})
console.log(userBooks);