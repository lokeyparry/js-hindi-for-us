const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descripter);




const lokey = {
    name: "parry is here",
    money: 33000,
    isAvailable: false,
    ordersweet: function () {
        console.log("paisa nahi hai");
    }
}
// console.log(Object.getOwnPropertyDescriptor(lokey, "name"));

Object.defineProperty(lokey,"name", {
    // writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(lokey, "name","money"));


for (let [key,value] of Object.entries(lokey)) {
    if (typeof value !== 'function') {
        console.log(`${key} :${value}`);
    }
}