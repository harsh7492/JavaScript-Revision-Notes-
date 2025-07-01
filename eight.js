const student ={
    a:"name",
    b:"age",
    cla(){
        console.log("yo");
    },
    printM: function(){
        console.log(this.a,this.b);
    },
};
const ka={
    sal:40,
}
ka.__proto__=student;
//use student proprties in ka
let arr=["a","b","c"];
console.log(arr);
//all functions come from prototype it contain methods and inherit this from arr
//prototype priority low
class Abc{
    constructor(brand)
    {
        this.brand=this.brand;
    }
    start(){
        console.log("start");
    }
    set(b)
    {
        this.a=b;
    }
    fun()
    {
     console.log("hello");
  
    }
}
class Def extends Abc{
    fun(){
        console.log("hello");
    }
    //super();
    //super.fun();

    //override
}
let obj=new Abc();
console.log(typeof obj);
obj.set("hello");
