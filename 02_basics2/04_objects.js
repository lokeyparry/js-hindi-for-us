// const tinderUser=new Object() //this is called singleton
const tinderUser={}

 tinderUser.id="123abc"
 tinderUser.name="parry"
 tinderUser.isLogedIn=false
// console.log(tinderUser);
const regularUser={
    email:"some@gmail.com",
    fullname:{
        firstname:"parvej",
        lastname:"ansari"
    }
}
// console.log(regularUser.fullname.firstname);

const obj1={1:"lokey",2:"parry"}
const obj2={3:"parvej",4:"ansari"}
// const obj3={obj1,obj2}

// const obj3= Object.assign({}, obj1, obj2)

// spread oprator
const obj3={...obj1, ...obj2}
// console.log(obj3);


// when value come from database

const user = [
    {
        id:1,
        email:'hack@gmail.com'
    },
    {
        id:2,
        email:'jack@gmail.com'
    },
    {
        id:3,
        email:'pack@gmail.com'
    },
]
user[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('name'));


// destructuring


const course={
    coursename:"Btech",
    branch:'CSE',
    year:2014,
    price:"999"
}
// course.price
const{price: p, branch:b, year:y,coursename:c}=course
console.log(p,b,y,c);
  
