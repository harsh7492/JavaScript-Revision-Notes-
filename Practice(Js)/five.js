let inp=document.querySelectorAll("input");
let f=document.getElementById("btn");
console.log(inp);
let l=document.createElement("input");
l.setAttribute("id","fn");
f.before(l);  
let v=document.querySelector("fn");
let k;
f.addEventListener("click",()=>
{
 l.value=inp[0].value+inp[1].value;
 k=l.value;
})
v.value=k;