// let ar=[1,2,3,4,5]
// let sq=[]
// for(let i of ar){
// sq.push(i*i);
// }
// console.log(ar);
// console.log(sq);

//map
//It loop through every element of  array
//perform specific operation and return new array
// const num=[1,2,3,4,5,6];
// const sn=num.map(n=>{return n*n})
// console.log(sn);
// const t=[1000,3000,4000,5000]
// const d=86;
// const dl=t.map(r=> {
//     return (r/d).toFixed(2)
// })
// console.log(dl);
//toFixed is return number of decimals
//for each doing same  but not return new array
//it return values within scope
// const num=[1,2,3,4,5,6];
// const sn=num.map(n=>{return n*n})
// console.log(sn);
// const t=[1000,3000,4000,5000]
// const d=86,e=[];
// const dl=t.forEach(r=> {
//      e.push(r*d);
// })
// console.log(e);

//find return the first element of an array that satisfy the condition
// const t=[100,200,300,400,500];
// const f=t.find(n=>{
//     return n>300;
// });
// console.log(f);
//find index return element index
// const t=[100,200,300,400,500];
// const f=t.findIndex(n=>{
//     return n>300;
// });
// console.log(f);
//some method return boolean value based on condition if any value foundthen its return true
// const t=[100,200,300,400,500];
// const f=t.some(n=>{
//     return n>300;
// });
// console.log(f);
//high order function function except function as argument and return a function
//every same as some but check every element for condition
// const t=[300,400,500];
// const f=t.every(n=>{
//     return n>=300;
// });
// console.log(f);
//filter method 
// let ar=[1,2,3,4,5,6,7,8],ar1=[];
// for(let i of ar){
//     if(i%2==0)
//         ar1.push(i);

// }
// console.log(ar1);
// let ar=[1,2,3,4,5,6,7,8,9,10];
// let ar1=ar.filter(n=>{
//     return n%2==0;
// }

// );
// console.log(ar1);
// let t=[100,200,300,400,500];
// let d=t.filter(n=>{
//     return n>100;
// });
// console.log(d);
//Reduce 
//you need the sum of every element in array
// let num=[1,2,3,4,5],sum=0;
// for(let i of num){
//     sum+=i;
// }
// console.log(sum);
// let num=[1,2,3,4,5];
// let s=num.reduce((sum,n)=>{
//     //return sum+=n;
// let u=sum*n;
// return u;
// },1);
// after 1 iteration accuulator value is 0=1
//at last it return last accumulated value
// console.log(s);

//chaining of high order function
let ar=[
    {name:'A',age:12,gender:'m'},
    {name:'B',age:16,gender:'f'},
    {name:'C',age:2,gender:'m'},
    {name:'D',age:1,gender:'f'},
    {name:'E',age:17,gender:'f'}
];
for(let i of ar){
    if(i.gender==='m')
    console.log(`Age=${i.age}`);
}
let ag=ar.filter(a=>{
    return a.gender=='m';
   
}).map(ag=>{
    return ag.age;
});
console.log(ag);
// let m=ag.map(m=>{
//     return m.age;
// });
// console.log(m);
let ts=[100,200,300,400,500,600];
let r=ts.filter(n=>{
    return n<400;
}).reduce((sum,n)=>{
    return sum+n;
},0);
console.log(`Sum of transaction=${r}`);


