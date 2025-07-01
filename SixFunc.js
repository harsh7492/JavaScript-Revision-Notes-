//Functions
//console.log("hello");
// function mY(msg,n)
// {
//     console.log("hello",msg);
//     console.log("Rahul",n);
//     return n;
// }
// a=mY("Harsh",4);
// console.log(a);
// console.log(mY("Harsh",4));
//msg,n are local   variables
//NAN Not a NUMBER if string *3 then  this show
//arrow function use in mordern javascript
// const as=(a,b)=>{
//     console.log("yo",a,b);
//     return a;
// }
// console.log(as);
// console.log(as(2,6));
//for ech loop is a method used in array
//functions can pass as parametere in js
// function hi()
// {
//     console.log("kkkk");

// function yo()
// {
//         console.log("yyy");

// }
// return yo;
// }
// console.log(hi());
//call back function when function passed as argument to other function
//function can return other function in js
let arr=[1,2,3,4];
arr.forEach(function pv(v){
console.log(v);
});
arr.forEach((v,i,arr)=>{
console.log(v,i,arr);
})
//for each is higher order function these function either return function take another function as parametere
arr.forEach((v)=>{
    console.log(v*v);
        console.log(v**2);

})
let cal=(v)=>{
    console.log(v*v);
};
arr.forEach(cal);
//map method is similar to foreach
//but diffrence is it return a new array 
let na=arr.map((v)=>{
    console.log(v);
    return v*2;
})
console.log(na);
//for each used for calculation
//map is used to return new array
//filter method it filter the records
let fa=arr.filter((v)=>{
    return v>=2;
})
console.log(fa);
//reduce method
//it calculates array return single value
//res 1 v 2 res 3 v 3 r 6 v 4 r 10
let ra=arr.reduce((v,res)=>{
    return v+res;
})
let r=arr.reduce((v,res)=>{
    return res>v?res:v;
})
console.log(r);


