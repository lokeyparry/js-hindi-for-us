// 1:: for of loop

const arr =[1,2,3,4,5]
for (const num of arr) {
    // console.log();
}

const greeting = "Hello India"
for (const v of greeting) {
    // console.log("this is greeting",v);
}

// Maps
const map = new Map()
map.set('In',"INDIA")
map.set("Us","AMERICA")
map.set("Fr","FRANCE")
// console.log(map);


for (const [key, value] of map) {
    
    // console.log(key,value);
}


// for Object

const myObject = {
    "game1":"PUBG",
    "game2":"MINECERAFT",
    "game3":"GTAV1"
}
// for (const [key,value] of myObject) {
//     console.log(key,value);
// }