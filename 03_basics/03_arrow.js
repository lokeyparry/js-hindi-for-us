const user ={
    username: "lokey",
    price:999,
    welcomeMessage: function () {
        console.log(` ${this.username} , Welcome to the website`);     
        console.log(this)   
    }
}
// user.welcomeMessage()
// user.username="parry"
// user.welcomeMessage()
// console.log(this)   


// function cahi(){
//     let username="lokey"
//     console.log(this);
// }
// cahi()

const cahi=()=>{
    let username="lokey"
    console.log(this);
}
// cahi()

//  Basic arrow function
const addTwo = (num1, num2) => {
    return num1 + num2
    // in this {} we sill use return
}
// console.log(addTwo(9,6));



//  Implicit arrow function
const addNum = (num1, num2) =>  (num1 + num2);
// in this () we will not use return
// console.log(addNum(9,6));



