//const { default: test } = require("node:test");

function Test(){
    let a=2;//lexical Scope for Second Function
    function One(){
        //One has Always scope to outer Function
        //A is not Part of function but Still Accessible to Outer Scope
        console.log(a);
    }
    return One;
}
let fun=Test();
console.log(fun);
fun();
function greet(){
    let name='Dhoni';
    function display(){
        console.log('name=',name);
        let age =24;
        function Age(){
            console.log("age=",age);
        }
        return Age;
    }
    return display;
}
let g1=greet();
let g2=g1();
g2();