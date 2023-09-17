const promiseOne = new Promise(function(resolve, reject){
    // Do as async task
    // DB calls, Cryptography, network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve();
    },1000)
})
promiseOne.then(function(){
    console.log("Promise is consumed")
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"lokey",email:"lokey@email.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false //true
        if(!error){
            resolve({username:"parry",password:"1234"})
        }else{
            reject('Error:Somthing went wrong')
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The Promise is either resoplved and rejected"))




const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true  //false
        if (!error){
            resolve({username:"Javascript", website: "lokey@email.com"})
        } else {
            reject('Error: Js Somthing went wrong')
        }
    }, 1000)
});
async function consumePromiseFive(){
   try{
    const response = await promiseFive
    console.log(response);
   } catch(error){
    console.log(error);
   }
}
consumePromiseFive()


// async function getAllusers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//         const data = await response.json()
//         console.log(data)
//     }catch(error){
//         console.log("E: ",error)
//     }
// }
// getAllusers()


fetch('https://api.github.com/users/lokeyparry')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error));