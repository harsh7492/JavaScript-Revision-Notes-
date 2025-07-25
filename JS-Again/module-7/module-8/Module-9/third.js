// const { json } = require("stream/consumers");

let first='Harsh';
let second=first;
first='Rahul';
console.log(first);
console.log(second);

// let obj={
//     name:'Harsh',
//     age:15
// };
// let obj2=obj;
// obj2.name='Rohit'
// console.log(obj);
// console.log(obj2);
//Primitive Number String null Boolean undefined //Immutable //created in stack memory
//Refrence Object fuction Arrays //Mutuable//created in heap memory

//Shallow copy Deep Copy
//Shallow Copy 
///Spread Operator{...} It Takes Out First Property
// let obj={
//     name:'Harsh',
//     age:15
// };
// let obj2={...obj};
// obj2.name='Rohit'
// console.log(obj2);
// console.log(obj);
//problem with Nested Object If one Object is change that another also change
let obj={
    name:'Harsh',
    age:15,
    address:{
        city:'Varanasi',
        State:'UP'
    }
};
// let obj2={...obj};
// obj2.address.city='Delhi'
// console.log(obj2);
// console.log(obj);
let obj2=JSON.parse(JSON.stringify(obj));//creating Seprate Refrence //Deep Copy
obj2.address.city='DELHI';
console.log(obj);
console.log(obj2);




