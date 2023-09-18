class user{
    constructor(username){
        this.username = username
    }
    loggMe(){
        console.log(`Username is ${this.username}`);
    }
}
class Teacher extends user{
    constructor (username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    
    addCorse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const pappa = new Teacher ("pappa","pappa@gmail.com","123")
pappa.addCorse()

const mamma = new user ("shamsher")
mamma.loggMe()