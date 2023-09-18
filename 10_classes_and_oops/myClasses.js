// class User {
//     constructor (username, email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptpassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const bio = new User("lokey","loakey@gamil.com","98989")
// console.log(bio.encryptpassword());
// console.log(bio.changeUsername());
function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encryptpassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const Lol = new User("homo","homo@gamil.com","98989")
console.log(Lol.encryptpassword());
console.log(Lol.changeUsername());