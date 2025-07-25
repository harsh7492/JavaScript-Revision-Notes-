//constructor function
function Car(name,company,color){
this.name=name;
this.company=company;
this.color=color;
this.drive=function(){
    console.log("helloo");
}
}
let c1=new Car('x1','BMW','red');
let c2=new Car('x2','BMW','green');
c1.drive();
//console.log(c2);