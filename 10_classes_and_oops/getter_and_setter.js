class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}lokey`
    }
    set password(value){
        this._password=value.toUpperCase()
    }
    get email(){
        return this._email.toUpperCase()
        // return `${this._password}lokey`
    }
    set email(value){
        this._email=value.toUpperCase()
    }
}
const lokey = new User("lokaeu@.com","9867Abj")
console.log(lokey.password);
console.log(lokey.email);