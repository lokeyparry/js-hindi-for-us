function multiplyBy5(num){
    return num*5
}
multiplyBy5.power = 2

console.log(multiplyBy5(3));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(username,score){
    this.username= username
    this.score = score
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
createUser.prototype.increment = function(){
    score++
}

const chai = new createUser("chai", 35)
const score =  createUser("tea", 150)

chai.printMe()


/*
Here's what happen behind the sense when new keyword is used:

A new object is created : the keyword initiate the creation of a new javascript objects


A prototype is linked : the newly created objects gets linked to the prototype property of the constructor function . this
means that it has acces to property and method defined on the constructor'prot
otype

the constructor is caled : the constructor function is called with the specified arguments and 
this bound to 
the newly created objects . if no explicit return value is specified from the constructor .
javascript asume this thely created objects , to be the intended return value

the new objects is returned :after the constructor function has been called , if it does'snt return  a non primitive value
(object, arry function etc), the newly create object is returned
*/ 