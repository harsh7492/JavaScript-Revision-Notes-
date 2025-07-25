// Imperative way and Declarative Way
//we will be given a number and we have to check the square of number is even or odd
//It is imperative way
// let num=prompt('enter a number');
// let sq=num**2
// console.log(sq);
// if(sq%2===0)
// {
//     console.log('even');
// }
// else{
//     console.log('odd');
// }
// It is declarative way
const check=x=>x*x%2===0?console.log('even'):console.log('odd');
check(3);