// let a=300
// if(true){
//     let a=10
//     let b=20
//     console.log("inner value", a)
// }
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
// console.log(a)

// when we run example in node environment ist diffrent global scope



//nested scope

function one(){
    const username = "lokey"
    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website)
    // two()
}
one()



if (true){
    const username ="lokey"
    if (username==="lokey"){
        const website = " youtube"
        // console.log(username+website);
    }
    // console.log(username)
    // console.log(website)
}
// console.log(username)

// +++++++++++++++++++++++INTRESTING+++++++++++++++++++++++++++++++++++++++++

function addone(num){
    return num+1
}
addone(6)
// this function called simple function and we can call this before function

const addtwo = function(num){
    return addtwo+2
}
addtwo(7)
// in the second function addtwo is called expression and we can`t call this before function 
// this is called hoisting