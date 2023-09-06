// for in for object

const myObject = {
    "game1":"PUBG",
    "game2":"MINECERAFT",
    "game3":"GTAV1"
}
for (const key in myObject) {
    // console.log(`${key} for value ${myObject[key]}`);
}

// for in for array
const pros =["js","html","ruby","java","c++"]
for (const key in pros) {
    // console.log(`index of ${key} :- ${pros[key]}`);
}
// for in for map
// map is not itraval
const map = new Map()
map.set('In',"INDIA")
map.set("Us","AMERICA")
map.set("Fr","FRANCE")
// for (const key in map) {
//     console.log(key);
// }

