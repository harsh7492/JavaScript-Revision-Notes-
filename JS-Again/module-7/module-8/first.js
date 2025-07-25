//Internal node js module read and write from file
//const { error } = require('console');
const fs=require('fs')
console.log('first line');

// let data=fs.readFileSync('F1.txt');
// console.log('file Data'+" "+data);
// let data2=fs.readFileSync('F2.txt');
// console.log('file Data'+" "+data2);
//It gives Data in Random Order
fs.readFile('F1.txt',cb1);
function cb1(err,data){
    if(err)
    {
        console.log(err)
    }
    console.log('File-Data'+" "+data);
    fs.readFile('F2.txt',cb2);
}

function cb2(err,data){
    if(err)
    {
        console.log(err)
    }
    console.log('File-Data'+" "+data);
    fs.readFile('F3.txt',cb3);
}


function cb3(err,data){
    if(err)
    {
        console.log(err)
    }
    console.log('File-Data'+" "+data);
}
console.log('last line');
//for serial execution put fs.read in another function
//for parrallel put normal like first callback
