const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const plusten=myNumbers.map( (num) => num+10)


// chaining
const plusten = myNumbers
               .map( (num) => num*10)
               .map( (num) => num+2)
               .filter( (num) =>num>50)
console.log(plusten);