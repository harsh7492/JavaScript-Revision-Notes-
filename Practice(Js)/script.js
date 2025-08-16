let f=document.getElementById("h1");
let t=document.getElementsByTagName("p"); //you can not use for each in tag name you can use in query selector
console.log(f);
console.log(f.innerHTML);
console.log(f.innerText);
let d=document.getElementById("con");
d.innerText=f.innerText;
console.log(t[1].innerText); //give dATA IN ARRAY OR NODE FORM WHEN MULTIPLE TAGS ARE USED
let  c=document.getElementsByClassName("abc");
c.innerText=f.innerText;
console.log(c); // it also give data in form of html
let q=document.querySelector("#h1");// it only target first element 
q.innerText=f.innerText; //it select id # class . tag name
console.log(q.innerText);
ql=document.querySelectorAll("p");
//array form node list 
let i,ind
console.log(ql);
ql.forEach((ql,ind)=>{
    console.log(ql,ind);
        console.log(ql.innerHTML);

});
let a=()=>{
    alert('Hello Prakhar');
}
let btn=document.getElementById("bt"); //event listner 1st parametere event 2nd function
btn.addEventListener("click",()=>{
    alert("prakhar");
})
let inp=document.getElementById("pass");
let bt=document.getElementById("bt2");
bt.addEventListener("click",()=>{
    if(bt.innerText=="Show")
    {
        inp.type="text";
        bt.innerText="Hide";
    }
    else
    {
    console.log(inp.type);
    inp.type="password";
    bt.innerText="Show";
    }
})
let cs1=document.querySelector("#cl1");
let cs2=document.querySelector("#cl2");
let cs3=document.querySelector("#cl3");
let cs4=document.querySelector("#cl4");
let para=document.getElementById("cs");
cs1.addEventListener("click",()=>{
    alert("function working");
    para.style.color="red";
    para.style.backgroundColor="black";
})
cs2.addEventListener("click",()=>{
    para.setAttribute(id)
})
let l=document.getElementsByTagName("a");
l.href="www.google.com";

console.dir(window.document.body);
console.log(document.body);
console.dir(window.document.body.childNodes[1]);
// document.body.style.backgroundColor="red";
// document.body.ch-ildNodes[1].innerText="Harsh";
//when we put script  code in head file then then we can not access DOM elements thats why we put script before body tag
//html collection dom include every thing related to dom

console.log(para.tagName); // it is used  to access the tag name //decendants after children siblings
//first child in dom last child in dom
//document.querySelector("div").chldren;
//text node commnet node element node
//inner text also return all children of text
para.innerText="abcd";
para.innerHTML="<a href='https//google.com' target='Main'>Visit</a>";
//text content show the hidden text