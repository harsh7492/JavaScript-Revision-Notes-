let a=4;
let test=()=>{
console.log(1);
}
let test2= a=>console.log(a+7);   //when we passing only one arameter then no need to bracket 
//if the function hhas single line dont use curly braces
let test3=(a,b)=>{
console.log(a+b);
}
test();
test2(4);
test3(3,6);