//Application of Closure
//What If multile parameters have to pass then use Currying
let sum=(x,y)=>{
    console.log(x+y);
}
sum(2,3)
let sumCurried=(x)=>{
return (y)=>{
    console.log(x+y);
}
}
let two=sumCurried(2);
two(3);