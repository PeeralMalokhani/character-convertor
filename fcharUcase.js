
//first character lower case of given sentence


let message=prompt("enter your name");

let firstChar=message.slice(0,1);
let UCaseFirstchar=firstChar.toUpperCase();

let LastChar=message.slice(1,message.length);
let LCharLowerCase=LastChar.toLowerCase();

let C_Name=UCaseFirstchar+LCharLowerCase;

alert(C_Name);
