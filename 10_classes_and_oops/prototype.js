let myheros = ['thor', 'spiderman']
let herosPower = {
    thor: "Hammer",
    spiderman: "Sling"
}

Object.prototype.lokey = function(){
    console.log(`Lokey is present in all objects `);
}
Array.prototype.heyLokey = function(){
    console.log(`hey lokey parry`);
}
// myheros.lokey()
// myheros.heyLokey()
// herosPower.lokey()

// inheritance

const parry = {
    name:'parry',
    email:"lokey@.com"
}

const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable : true
}
const TASupport = {
    makeAssignment: 'Js Assignment',
    fulltime: true,
    __proto__:TeachingSupport
}
Teacher.__proto__ =  parry
//  moidern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName = "Parvej Ansari   "
String.prototype.trueLength = function(){
    console.log(this);
    // console.log(this.name);
    console.log(`true length is: ${this.trim().length}`);
}
anotherUserName.trueLength()
"lokey".trueLength()
