let t=document.querySelector("title");
t.innerText="Practice-2";
let bt=document.createElement("button");
bt.innerHTML="<b>click me</b>";
bt.style.color="white";
bt.style.backgroundColor="red";
document.body.prepend(bt);
let para=document.createElement("p");
para.setAttribute("class","pg");
para.innerHTML="<u>Document Object Model</u>";
document.body.append(para);
// para.style.color="green";
para.setAttribute("class","pk");
//class list property 
//para.classList para.classList.add("pk");
para.classList.add("pg");