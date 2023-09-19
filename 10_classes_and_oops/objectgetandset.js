const User = {
    _email:"lokaey@.com",
    _password:"86798",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },
    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password = value
    }
}
const parry = Object.create(User)
console.log(parry.password);
console.log(parry.email);