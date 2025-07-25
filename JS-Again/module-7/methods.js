let p1={
    name:'Harsh',
    age:18,
    
}
//p1.pd();
let pd=function(city,state){
        console.log(this.name,this.age,city,state);
    }
let p2={
    name:'Rahul',
    age:21,
    pd:function(){
        console.log(this.name,this.age);
    }
}
//p2.pd();
//call method //borrowing the function from function 1
//p1.pd.call(p2);
//you can also pass multple argume
// pd.call(p2,'Varanasi');
//only diffrence is pass with array in apply
pd.apply(p2,['Varanasi','up']);
//Bind method It allow to store the particular function used inlater stage
let v=pd.bind(p2,'Varanasi','UP');
v();