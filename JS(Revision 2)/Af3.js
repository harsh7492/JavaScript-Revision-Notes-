let t=document.querySelector("title");
t.innerText="Promises";
let pr=new Promise((resolve,reject)=>{
    console.log("I Am Immpossible");
    resolve("Success");
    //reject("possible");
});
console.log(pr);

function Data(roll){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("roll is:"+roll);
       resolve("success");
       //reject("Error");
      },5000);
    })
}
const hell=()=>{
    return new Promise((resolve,reject)=>{
console.log("Haaaa");
//resolve("Success");  
reject("Error");      

    });
}
let p2=hell();
p2.then((res)=>{
    console.log("promise fullfilled",res);
});
let p3=hell();
p3.catch((er)=>{
console.log("Networ",er);
})
function Con(roll){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(roll);
            resolve("success");
        },2000);
    })
}
let p5=Con(5);
p5.then((res)=>{
    console.log("Free"+res);
})
let p6=Con(6);
p5.then((res)=>{
    console.log("Free"+res);
    let p7=Con(8);
    p7.then((res)=>{
console.log("hell"+res);
    })
});
Con(9).then((res)=>{
    Con(10).then((res)=>{

    })
})
async function lol(){
    console.log("hello GTA");
}
function mp(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("live is here");
        },3000);
    });
}
async function gmp(){
    await mp();
}