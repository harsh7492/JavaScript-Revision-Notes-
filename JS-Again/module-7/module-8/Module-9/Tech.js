//Undefined
let a;
//js will assign Undefined
console.log(a);
let ar=[1,2,3];
console.log(ar[3]);
function add(a,b){
    let c=a+b;

}
let s=add(8,5);
console.log(s);
//null Explicit Value
let life=null;
console.log(life);//no value

//Not defined means if variable is not create and we are trying to access 
//console.log(b);
//type of 
let k=9;
console.log(typeof(k));
let obj={
    name:'hu'
}
console.log(typeof(obj));
let obj2=[2,3,4];
console.log(typeof(obj2));
//for show array not object
let t=Array.isArray(obj2); // this return true
console.log(t);


