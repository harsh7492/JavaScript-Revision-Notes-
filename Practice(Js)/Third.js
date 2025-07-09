document.write("Creating a  toggle Button");
let t = document.querySelector("title");
t.innerText = "Toggle Button";
let bt = document.createElement("button");
bt.innerHTML = "<b>Click To Change Color</b>";
bt.style.color = "white";
bt.style.backgroundColor = "green";
document.body.prepend(bt);
bt.style.border = "2px solid green";
bt.style.margin = "50px";
let m = "light";
bt.classList.add("change");
bt.addEventListener("click", () => {
    if (m === "light") {
        m = "dark";
        document.body.style.backgroundColor = "black";
    }
    else
    {
        document.body.style.backgroundColor = "white";
         m="light";
    }  


})
document.write(" <br><pre>                     <u> Successfully Created<u><pre>");