let t=document.querySelector("title");
t.innerHTML="Local-Storage"
localStorage.setItem("Name","Rahul");
let g=localStorage.getItem("Name");
console.log(g);
localStorage.clear();
let n=document.createElement("input");
n.setAttribute("type","text");
n.setAttribute("id","inp");
n.setAttribute("placeholder","Enter your name");
document.body.prepend(n);
let bt1=document.createElement("button");
let bt2=document.createElement("button");
bt1.innerHTML="<b>saveName</b>";
bt2.innerHTML="<b>showName</b>";
document.body.append(bt1);
let para=document.createElement("p");
para.setAttribute("id","output");
document.body.append(para);
para.innerText="Hello Hi";
let dv=document.createElement("div");
dv.style.height="200px";
dv.style.width="350px";
dv.style.color="white"
dv.style.backgroundColor="black";
dv.style.textAlign="center";
dv.style.paddingTop="50px";
dv.style.fontSize="100px";
document.body.prepend(dv);

document.body.append(bt2);
dv.innerText="Hello";
bt1.addEventListener("click",()=>localStorage.setItem("name",n.value));
bt2.addEventListener("click",()=>{
    const c=localStorage.getItem("name");
    dv.innerText=c;
    para.innerText=c;
});
n.style.marginTop="50px";
// dv.innerText=para.innerText;


