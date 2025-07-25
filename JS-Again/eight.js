//IMpure function because same input diffrent result
//external factor
var a=13;
function add(x){
    console.log(x+a);
    a++;
}
add(2);
add(2);
add(2);
//pure function
// no external factor
//console.log why it not a purely fun if return then it is
//finction task is only add not depend on any external factor
function sub(x,a){
return x+a;
}
console.log(sub(4,9));