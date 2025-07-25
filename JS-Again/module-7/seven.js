let obj={
    Language:'C++'
};
console.log(obj);
let obj2={
    name:'harsh',
    age:15
}
obj2.__proto__=obj;
console.log(obj2.Language)

console.log(obj2.hasOwnProperty('name'));

function Person(name,age){
    this.name=name;
    this.age=age;
}
let person=new Person('Rahul',12);
console.log(person);

//prototype chaining
function fun(name,age)
{
    this.name=name;
    this.age=age;

   
}
fun.prototype.get=function(){
        console.log(this.name,this.age);

    }
    //we define function in prototype and if in constructor function the it create copy with each object rather than linking
let p=new fun('hello',23);
let p2=new fun('hi',24);
console.log(p.get());
console.log(p2); 
