
function myName(){
    console.log("P");
    console.log("A");
    console.log("R");
    console.log("V");
    console.log("E");
    console.log("J");
}
// myName()
function add(a,b){
//    return result=a+b
   console.log(a+b);
}
// console.log(add(5,9))
// add(90, 80)


function loginUserMessage(username){
    if(username===undefined){
        console.log(`Eneter the valid username`);
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())



function calculateCartprice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartprice(400, 500, 600, 900))

// when we not passing any argument it gives us undefined




const user = {
    username:"lokey",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
// passing an object
handleObject({
    username: "parry",
    price: 399
})
// console.log(handleobject())


// passing an array
const myNewArray = [200,700,600,660]
function returnsecondvalue(getArray) {
    return getArray[1]
}
console.log(returnsecondvalue(myNewArray));
