//setTimeout(callback,1000)
// console.log('before');
// function greet(){
//     console.log('hello from timeout');
// }

// function greet1(){
//     console.log('hello from timeout one');
// }
// setTimeout(greet,2000);
// setTimeout(() => {
//     greet1();
// }, 3000);
// console.log('after');

function hello(){
    console.log('hello');
}
let t=setInterval(hello,1000);
setTimeout(()=>{
    clearInterval(t);
},4000)
