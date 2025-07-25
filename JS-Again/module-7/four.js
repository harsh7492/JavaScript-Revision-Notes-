class Base{
constructor(name,age){
    this.name=name;
    this.age=age;
}
welcome(){
    console.log('hello');
}
}
class child extends Base{
constructor(name,age,st){
super(name,age);
    this.st=st;

}
test(){
    super.welcome();
}
}
class gc{

}
let p1=new Base('harsh',12);
let t=new child('rahul',40,75)
t.test();