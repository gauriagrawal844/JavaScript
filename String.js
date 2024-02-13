//👉👉How to find the length of a string
let Myname="gauri";
console.log(Myname.length);
let lastName="agarawal";
console.log(lastName.length);
//👉👉 Escape character
//backslash escape character: turn special character into special characters into the strings.

//code    result  description 
//\'      '       single quote
//\"      "       double quote
//\\      \       Backslash

//👉👉 if you don't want to mess, simply use the alternate quotes.
let anySentence="we are the so-called \"Vikings\" from the north.";
console.log(anySentence);
let a="I am 'Gauri Agrawal'.";
console.log(a);

//👉👉 how to find string in a string.
//👉👉IndexOf()
const myBioData= 'I am Gauri Agrawal';
console.log("Example of indexOf() :");
console.log(myBioData.indexOf("Gauri"));//Case sensitive.
console.log(myBioData.indexOf("a",3));//Forward search

//👉👉lastIndexOf()
console.log("Example of lastIndexOf() :");
console.log(myBioData.lastIndexOf("Gauri"));//Case sensitive.
console.log(myBioData.lastIndexOf("a",3));//Backward search

//👉👉Searching for a string in a string 
//The search() method searches a string for a specified value and returns the position of the match.
//The search method cannnot take a second start position arguments.
console.log("Example of search() :");
console.log(myBioData.search("Gauri"));

//👉👉Extracting string parts.
// there are 3 methods for extracting a part of a string:
//👉substring(start,end),👉slice(start,end),👉substr(start,end) 
//👉slice(start,end) : it extracts a part of string and returns the extracted part in a new string.In this end position is not included.
const fruit="Apple,Kiwi,Bananaa";
console.log("Example of slice method :");
const c=fruit.slice(6,10);
console.log(c);
const d=fruit.slice(6,-2);// upto last second character.
console.log(d);

//👉substring(start,end) : it is similar to slice.the difference is that substring cannot accept negative indexes.
// if we give negative value tthen the characters are counted from the 0th position.

let e=fruit.substring(8,-2);// in this -2 has no valuee as it does not consider negatives
let f=fruit.substring(0,4);
console.log(e);//"Apple,ki"
console.log(f);


//👉substr(start,end) : similar to slice()
//The difference is that the second parameter specifies the length of the extracted part.

let g = fruit.substr(0,5);// 0 index se 5 words dega
let h=fruit.substr(3,2);// 3 rd index se 2 letters dega
let i=fruit.substr(5,-2);//it does not give any output
let j=fruit.substr(-7);//last se 7 characters print krayeg.
console.log(g);
console.log(h);
console.log(i);
console.log(j);

//👉👉 Replacing String Content()

//The replace() method replaces a specified value with another value in a string
let intro="I am gauri Agrawal gauri";
let k=intro.replace('gauri','Gauri');//It replace only first value.
console.log(k);

//Points to remember :
//1.The replace method doed not change the string. It return a new string.
//2.By default,the replace() method replaces only the first match.
//3.By default, the replace() method is case sensitive.

//👉👉 Extracting String Characters
//👉There are three methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access []


//👉 charAt() method
//The charAt() method returns the character at a specified index (position) in a string

let str="HELLO WORLD";
console.log(str.charAt(0));

//👉charCodeAt() method : returns the unicode of the character at a specified index in string.(any integer b/w 0 and 65535.) always return integer.

 console.log(str.charCodeAt(0));

 //👉Property acess
 //ECMAScript 5 (2009) allows property access[] on strings.

 let s="HELLO WORLD";
 console.log(str[0]);// It works as charAt() method.

 //👉👉👉 Other useful methods

let n="gauri aGrAwaL";
console.log("In Upper Case : "+n.toUpperCase());//to convert all in upper case
console.log("In Lower Case : "+n.toLowerCase());//to convert all in lower case
//👉concat() method: joins two or more strings

let fName="gauri";
let lName="agrawal";
console.log("Concatination without space : "+fName.concat(lName));//Without Space
console.log("Concatination with space : "+fName.concat(" ",lName));//With Space

//👉 trim() method removes whitespace from both sides of a string not from mid of the string.

var t= "            Hello World!                ";
var q= "         Hello      World!           ";
console.log(q.trim());
console.log(t.trim());

//👉👉👉 Converting a string to an array 
//A String can be converted to an array with the split() method.

var txt="a, b,c|d,e"; //String
console.log(txt.split(","));  //Split on commas
console.log(txt.split(" "));  //Split on spaces
console.log(txt.split("|"));  //Split on pipe















