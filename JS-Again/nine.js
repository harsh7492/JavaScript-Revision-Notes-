function pr(n,ln){
    console.log(n);
    ln('rai');
}
pr('harsh',pr1);
function pr1(ln){
    console.log(ln);
}

//application of callback
let e=c=>{
    return c%2===0
}
let ch=(en,num)=>{
const ise=en(num);
console.log(`number${num} is even${ise}`);
}
ch(e,13);