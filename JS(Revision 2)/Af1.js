let t=document.querySelector("title");
t.innerText="Asynchronus-Programming";
// console.log("one");
// console.log("two");
// console.log("three");
function hello(){
    console.log("hello");
}
function hello2(){
    console.log("hello its a callback function");
}
hello2();
// setTimeout(hello,4000);
setTimeout(()=>{
    hello();
},4000);
console.log("yo");

//pass function as argument first fun1 execute and second hello 2 execute
function fun1(name,callback)
{
    console.log("hello\t"+name);
    callback();
}
// fun1("harsh",hello2);
setTimeout(()=>{
    fun1("harsh",hello2);
},5000);
function cal(a,b,built){
    return built(a,b);
}
const add=cal(3,4,(n1,n2)=>{
    return n1+n2;
});
setTimeout(()=>{
    console.log(add);
},2000);
