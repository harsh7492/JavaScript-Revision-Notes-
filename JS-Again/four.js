//destructuring array and object
let a=[1,2,,3,4];
//console.log(a[0]);
let [e,b,c,d,f,g]=a;
// console.log(g);

let p={
name:'harsh',
age:12,
gender:'m',
address:{
    country:"India",
    city:"varanasi"
}
};
let {name:n,age,gender,address}=p;
console.log(n);
// let {name,age,gender,address:{country:cn}}=p;
// console.log(name,age,gender,c); //it is giving undefined because diffrent keys
// //you use only object keys to destructure object
// let {name:n,age:ag,gender:gn}=p;
// console.log(n,ag,gn);