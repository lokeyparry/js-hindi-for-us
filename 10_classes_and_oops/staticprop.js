class User {
    constructor(username){
        this.username = username 
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createid(){
        return `123`
    }
}
const parvej = new User("ParvejAnsari")
// console.log(parvej.createid());

class Teacher extends User {
    constructor (username, email){
        super(username)
        this.email = email
    }
} 
const realme = new Teacher("raelome","realem@gamil.com")
console.log(realme.logMe());