// console.log('yo');
// alert('Hello');
//by default there is window object of browser not js it automatic created by browser
//it is global object
// window.console.log("hello2");
// window.alert("kk");
// //all html elements can access by js because all converted to object and access by js
// console.dir(document); //it used to access a property of object
// console.log(window.document);
// console.log(document);
// console.log(document.body);
// document.body.style.background="green";
// 'green'
//dynamic changes using dom main benefit without changing the origional html and css
// let a=document.getElementById("1").innerText;
// let b=document.getElementById("1").tagName;
// let c=document.getElementsByClassName("head").value;
// let d=document.getElementsByTagName("p");
// let e=document.querySelector("p");
// let f=document.querySelectorAll("p");
//console.log(a,b,c,d,e,f);
//it return the node list
//id null class 0 if not exist
//properties
//tag name=returns tag for element nodes
//inner text:return the text content in the element
//inner html:reurn the plain text or html contents in the elemnts
//text content:return textual content for hidden elements
//parent child decendendts,siblings same level
//console.log(document.body.firstChild)
//text node element node comment node first last child
// let u=document.querySelectorAll(".box");
// u[0].innerText="hello";
// console.log(u[1]);
// let idx=1;
// for(div of u)
// {
//     div.innerText=`YO HI ${idx}`;
//     idx++;
// }
// let d=document.querySelectorAll(".box");
// d.getAttribute("id");
// d.setAttribute("id","Abc")
// console.log(d);
// //node.style
// let div=document.querySelectorAll("div");
// div.style.backgroundColor="red";
let nb=document.createElement("button");
nb.innerText="hi";
console.log(nb);
let div=document.querySelectorAll("div");
div.append("nb");//adds at end of node
div.prepend("nb");//adds at start of node
//node.before adds before the node
//node. after adds after the node
//node.remove() //removes the node

//hw append child remove child


