class Person{
    constructor(name,age){
        //constructor method
      this.name=name;
      this.age=age;
    }
    welcome(){
      //you can declare any method without fuction keyword
      console.log("hello",this.name);
    }
};
let obj=new Person('Harsh',15);
console.log(obj);
obj.welcome();