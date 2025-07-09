let t=document.querySelector("title");
t.innerText="Parallel-Execution";
//Synchronus
console.log("Task-1");
console.log("Task-2");
setTimeout(()=>{
    console.log("Task-3");
},2000);
console.log("Task-4");

function hell()
{
    console.log("Welcome to the hell");
}
setTimeout(() => {
    hell();
}, 3000);
function sum(x,y){
    console.log(x+y);
}
function cal(x,y,call)
{
    call(x,y);
}
setTimeout(() => {
    cal(10,20,sum);
},5000);

function Roll(num,next){
   setTimeout(()=>{ console.log(num)
    if(next)
        next();
   },3000);
}
//callback hell nesting callback to remove use promise it is a object
Roll(1,()=>{
Roll(2,()=>{
    Roll(3,()=>{
        Roll(4);
    })
});
})