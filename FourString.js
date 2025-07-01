let a="Harsh";
let b='rai';
console.log(a,a.length,a[1]);
//Template Literals
let sen=`This is a sentence`;
console.log(sen,typeof sen);

let obj={
item:"pen",
price:10,
};
console.log("item is",obj.item,"is",obj.price,"ruppees");
let out=`the cost of ${obj.item} is ${obj.price} ruppees`;
console.log(out);
//it is used for remove comma
//number is highlighted 
//string is not highlighted
//you can also use expression intemplate literals
//escape sequence also use in string
console.log("Harsh \n \t Rai");
//escape character length is 1
let str="  harsh rai ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
//it not change original string it create new string
//string is immutable
str2=str.toLowerCase();
console.log(str2.trim());//remove white space from start and end
console.log(str2.slice(2,5));//5 not show
console.log(str2.concat(str));
let res=str2+str+13;//internally js 13 into string
console.log(res);
console.log(str2.replace("h","R"));//h is search r is replace char
console.log(str2.charAt(3));//char at index
str[0]="S";
console.log(str);
let u=prompt("enter user name");
let str3="@"+u+u.length;
console.log(u+str3);




