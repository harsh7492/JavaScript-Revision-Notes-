'use strict'
console.log(this);
//strict and non strict mode work
//drawback of non strict mode
// a=10;
// console.log(a);
//this key word work in four situation browser node strict non strict
// 'use strict'
// let a=10;
// console.log(a);
// console.log(this); 
//it give empty object when we use in global mode
// function fun(){
//  console.log(this);   
// }
// fun();
//when access this in function global object store all methods of asynchronus and node js
// let obj={
//     name:'harsh',
//     age:24,
//     fun:function()
//     {
//          console.log(this);
//         console.log(this.name);
//     }
// }
//it refer to curent object
// obj.fun();
// let obj={
    //again showing global object
//     name:'harsh',
//     age:24,
//     fun:function()
//     {
//         function fun2()
//         {
//          console.log(this);
//         console.log(this.name);
//         }
//         fun2();
//     }
// }
// obj.fun();

// console.log(this);
function display()
{
    console.log(this);
}
display();
//In strict mode it gives undefined
let obj={
  //  again showing global object
    name:'harsh',
    age:24,
    fun:function()
    {//It gives object itself
        function fun2()
        {
         console.log(this);
       // console.log(this.name);
        //it gives undefined but in non strict it give window and global
        }
        fun2();
    }
}
obj.fun();
//window object carries browser function
