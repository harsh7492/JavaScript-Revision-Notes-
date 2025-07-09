let h=document.querySelector("h2");
h.innerText=h.innerText + " from Apna College students";
let d=document.querySelectorAll(".DOM");
d[0].innerHTML="<b>Learn</b>";
d[1].innerHTML="<i>Practice</i>";
d[2].innerHTML="<u>Learn</u>";
d[2].innerText="Again Learn";
d[0].style.color="green";
d[1].style.color="yellow";
d[2].style.color="red";
h.style.color="grey";
for(let i of d)
{
    console.log(i.innerText);
}
let idx=1;
for(let j of d)
{
    j.innerText=`Using loop ${idx} time `;
    idx++;
}
let a=document.querySelector("#one");
let k=a.getAttribute("id");
console.log(k);
let p=document.getElementById("para");
console.log(p.getAttribute("id"));
p.setAttribute("class","pg");
console.log(d[0].style);
d[0].style.backgroundColor="blue";
d[0].style.color="black";
d[0].style.borderColor="black";
let bt=document.createElement("button");
let bt2=document.createElement("button");
let bt3=document.createElement("button");


console.log(bt);
bt.innerHTML="<b>Click</b>";
bt.style.marginTop="20px";
bt2.innerHTML="<b>Click</b>";
bt3.innerHTML="<b>Click</b>";
// bt2.style.marginTop="20px";
d[2].append(bt);//for end of node
d[1].prepend(bt2);//for start of node
// d[0].before(bt3);add before node
h.after(bt3);
p.remove();
//append child Remove Child








