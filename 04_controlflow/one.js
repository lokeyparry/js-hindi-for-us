const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle =false
const loggedInFromEmail = true
if(userLoggedIn&&debitCard){
    console.log("Allow to buy a course");
} else{
    console.log("Bhak madherchod");
}

if (loggedInFromGoogle||loggedInFromEmail) {
    console.log("user logged in");
}