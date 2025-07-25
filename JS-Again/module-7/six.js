// function person(name,age){
// this.name=name;
// this.age=age;
// }
// let obj=new person("harsh",24);
// obj.name='Rahul';
// console.log(obj.name);
function person(name,age){
var name1,age1;
name1=name;
age1=age;
this.getName=function(){
    return name1;
}
this.getAge=function(){
    return age1;
}
}
let obj=new person("harsh",24);
obj.name='Rahul';
console.log(obj.getName());
console.log(obj.getAge());