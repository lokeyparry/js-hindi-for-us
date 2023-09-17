function Setusername(username){
    this.username=username
}

function createuser(username, email, password){
    Setusername.call(this, username)

    this.email=email
    this.password=password
}
const lokey = new createuser("lokey","loakey@gmail.com",3999)
console.log(lokey);