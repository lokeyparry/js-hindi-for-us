// Reduce() method

const array=[1,2,3,4,5,6,7,8,9,10]
const initialValue = 0
const sumWithInitial = array.reduce(
    (accumulator, currentvalue)=> accumulator+currentvalue,
    initialValue
)
// console.log(sumWithInitial);

const shoppingCart = [
    {
        itemname:"js course",
        price:999,
        duration:"twomonth"
    },
    {
        itemname:"css course",
        price:499,
        duration:"onemonth"
    },
    {
        itemname:"html course",
        price:799,
        duration:"halfmonth"
    }
]
const course=shoppingCart.reduce( (acc,item)=> )
console.log(course);