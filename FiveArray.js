// let marks=[2 ,70,30,40];
// console.log(marks);
// console.log(marks.length);
// console.log(typeof marks);
// let sum=0;
// let index=0;
// for(let i of marks)
// {
//     sum+=i;
//     index++;
// }
// console.log(sum);
// for(j=0;j<marks.length;j++)
// {
//     console.log(marks[j].toString());
// }

// marks[0]=34
// console.log(marks[0]);
//you can change the value of array but not possible in string
//property give value
//method do work 
//for in also can use
// marks.push(8);
// marks.pop();
// for(let k of marks)
// console.log(k.toString());
//push,pop change in main array
//but to string return the original string and also concate
a=['a','b','f','g','l']
// b=['c','d'];
// c=a.concat(b);
//c.shift(); it return the deleted value
//c.unshift('h');

// console.log(c.slice(0,2));
// console.log(c.slice());
//It changes in original array and return new array
b=a.splice(1,2,'k');
a.splice(4); //all delete after 4
a.splice();//no change
a.splice(2,0,'b');//add element afterv 2
a.splice(2,1);//add element afterv 2


console.log(a);
console.log(b);