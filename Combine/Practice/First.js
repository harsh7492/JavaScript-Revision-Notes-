let nb=document.createElement("button");
nb.innerText="click me";
nb.style.color="white";
nb.style.backgroundColor="red";
document.querySelector("body").prepend();
let para=document.querySelector("p");
// para
// <p class=​"content">​I am A Possible​</p>​
// para.getAttribute()
// VM425:1 Uncaught TypeError: Failed to execute 'getAttribute' on 'Element': 1 argument required, but only 0 present.
//     at <anonymous>:1:6
// (anonymous) @ VM425:1Understand this error
// para.getAttribute("class")
// 'content'
// para.se
// undefined
// para.setAttribute("class","newClass");
// undefined