const code=["js","ruby","java","css","c++"]
// code.forEach(element => {
//     console.log(element);
// });
// code.forEach((item)=>{
//     console.log(item);
// })

// function declear first then print it
// function printme(item){
//     console.log(item);
// }

// code.forEach(printme)


// code.forEach( (item,index,arrlist)=>{
//     console.log(item,index,arrlist);
// })



const mycode =[
   { 
        sub: "js",
        class: 12,
        daru:" rum"
    },
    {
        lang:"hindi",
        area:"rural area",
        bgd:"Farmer"
    },
    {
        lang:"bhojpuri",
        area:"rural area",
        bgd:"Doctor"
    }
]

mycode.forEach( (element,index)=>{
    console.log(element.lang,index);
})