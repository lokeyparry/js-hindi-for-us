const userEmail = "lokey@gmail.com"

if(userEmail){
    console.log("gotb useremauil");
}else{
    console.log("bhal behnchod");
}


// notes
// falsy value
// false,0,-0,bogint 0n,"",null,undefined,Nan

// truthy value
// []," ","0","false",{},function(){}

// for array check truthy or fal;sy
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// for object check
const emptyObj={}
if (Object.keys(emptyObj).length===0) {
    console.log("object is empty");
}



// nullish Coalescing Oprator (??)

let val1
// val1=5??6
// val1=null??109
val1=undefined??89
console.log(val1);


// ternary oprator
const icePrice =90
icePrice>=80?console.log("the cost are very high"):console.log("cost are very low");;