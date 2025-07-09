let obj={
    name:"Roman Reigns",
    age:40
};
localStorage.setItem("wwe",JSON.stringify(obj));
// second.html:38 Live reload enabled.
// lo
// VM72:1 Uncaught ReferenceError: lo is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM72:1
// localStorage.get
// undefined
// localStorage.getItem("name");
// null
// localStorage.getItem("wwe");
// '{"name":"Roman Reigns","age":40}'
// let
// VM169:1 Uncaught ReferenceError: let is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM169:1
// let obj2=JSON.parse(wwe);
// VM267:1 Uncaught ReferenceError: wwe is not defined
//     at <anonymous>:1:21
// (anonymous) @ VM267:1
// let obj2=JSON.parse("wwe");
// VM279:1 Uncaught SyntaxError: Unexpected token 'w', "wwe" is not valid JSON
//     at JSON.parse (<anonymous>)
//     at <anonymous>:1:15
// (anonymous) @ VM278:1
// let obj2=loc
// VM325:1 Uncaught ReferenceError: loc is not defined
//     at <anonymous>:1:10
// (anonymous) @ VM325:1
// let obj2=localStorage.getItem("wwe");
// undefined
// obj2
// '{"name":"Roman Reigns","age":40}'
// let obj3=JSON.parse(obj2);
// undefined
// obj3
// {name: 'Roman Reigns', age: 40}
// Save data
// localStorage.setItem("key", "value");

// Get data
// let data = localStorage.getItem("key");

// Remove a single item
// localStorage.removeItem("key");

// Remove everything
// localStorage.clear();
