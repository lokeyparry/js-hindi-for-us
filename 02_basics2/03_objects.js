// how to use a symbol as key?  Ans- we put the key in squre barcket
const mySym=Symbol("key1")

const Jsuser={
    name:"parvej",
    fullname:"parvej Ansari",
    [mySym]:"key1",
    age:22,
    email:"lokey@gmail.com",
    isLoggedin:false,
    lastlogin:['monday',"sunday"]
}
console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser[mySym]);
Jsuser.age=24
console.log(Jsuser["age"]);


// if we want to block the object whis is changeble by anyone
// Object.freeze(Jsuser)
Jsuser.age=26
console.log(Jsuser["age"]);
console.log(Jsuser);

// add function in object
Jsuser.greeting=function(){
    console.log("hello jksusert");
}
console.log(Jsuser.greeting());
Jsuser.greeting2=function(){
    console.log(`hello js user ${this.fullname}`);
}
console.log(Jsuser.greeting2());