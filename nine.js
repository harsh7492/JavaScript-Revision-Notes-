// function hello(){
//     console.log("hello");
// }
//setTimeout(hello,4000);
//4sec
console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("hello");
},5000);
console.log("three");
//Asynchronus programming
function sum(a,b)
{
    console.log(a+b);
}
function calculator(a,b,sum){
    sum(a,b);
}
calculator(1,2,sum);
const hello=()=>{
    console.log("hello");
}
setTimeout(hello,4000);
//nesting
let a=10;
if(a>=5)
{
    if(a>=6){
        console.log("yo");
    } else{
console.log("Hi");
    }
}
else{
    console.log("haha");
}
for(let i=0;i<5;i++){
    console.log(i);
    for(let j=0;j<5;j++)
    {
        console.log(j);
    }
}
//callback hell means nested callback uses promises to overcome Hell 
function get(d,nd)
{
    setTimeout(()=>{
        console.log("data",d);
        if(nd){
        nd();
        }
    },3000);
}
get(1,()=>{
    get(2,()=>{
        get(3,()=>{
            get(4);
        });
    });
});
get(2);
get(3);
let pr=new Promise((resolve,reject)=>{
    console.log("I am a promise");
    reject("error");
})
//pending pr fullfilled rejected resolve is a function means fullfilled
//used for callback hell
// pending result is undefined
//promise.then after fullfill
//promise.catch after error automatic error res
//promise chain It is easy then callback chain
//better Async-wait
async function hell()
{
    await api();
 console.log("hell");   
}
//to return a promise compulsury
//await pause it surrounding async fun until promise is settled
//it used only in async fun
//IIFE without name it immediatly execute
(function(){

}) ();//it can not reuse
//use with async
const url="link";
let prom=fetch(url);
console.log(prom);
//use with async function
//ajax Xml data format
//json format in form of javascript object
//.json method:async method input is json output is object
//http verbs tell request type patch get post
//response status code 200 success 400 error 404 page not found api error
//http response header additional info
