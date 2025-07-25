// let p=new Promise((resolve,reject)=>{
//     const a=4;
//     const b=6;
//     setTimeout(()=>{
//         if(a===b)
//             resolve('Promise is resolved');
//         else
//             reject('Not Equal');
//     },2000);
// });
// console.log(p);
// p.then((res)=>{
//     console.log(res);
// }).catch((res)=>{
//     console.log(res);
// })
//comlex Promise
function order(drink){
return new Promise((resolve,rejects)=>{
    if(drink==='coffee')
        resolve('Order delivered');
    else
        rejects('Reject');
});
};
function Process(order){
    return new Promise(function(resolve,reject){
                 console.log('Order is being Served');
                 resolve(`${order} Served`);  
                 reject('take Time');    
    });
}
// order('rgrkg').then((order)=>{
//    console.log(order);
//    let a=Process(order);
//    a.then((accept)=>{
//     console.log(accept);
//    })
// }).catch((res)=>{
//    console.log('Reject');
// })
//Async And Await
async function Order() {
    try{
 let op=await order('Soup')
    console.log(op)
    let po=await Process(op);
    console.log(po);
    } catch(error){
        console.log(error);
    }
   
}
Order();