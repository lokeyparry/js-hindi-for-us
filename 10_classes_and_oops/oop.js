const user = {
    username: "parry",
    logincount: 9,
    signout: true,

    getuserdetails: function(){
        // console.log("Got usert Details from database");
        console.log(`username ${this.username}`);
    }
}
// console.log(user.username);
// console.log(user.getuserdetails());


function User(username, logincount, isLoggedin){
    this.username = username;
    this.logincount = logincount;
    this.isLoggedin = isLoggedin
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    

    return this
}
const userOne = new User('hitesh',12,true)
const userTwo =new  User("Lokey parry",11,false)
console.log(userTwo);
// console.log(greeting());