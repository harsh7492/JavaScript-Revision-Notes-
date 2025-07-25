//polmorphism
class Animal{
    sound(){
        console.log('Animals make diffrent sounds')
    }
}
class Dog{
     sound(){
        console.log('Dog Sounds');
    }
}
class Cat{
     sound(){
        console.log('Cat Sounds');
    }
}
let obj=new Animal();
let obj1=new Dog();
let obj2=new Cat();
obj.sound();
obj1.sound();
obj2.sound();
