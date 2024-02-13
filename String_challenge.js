//Display only 280 characters of a string

let MySentence = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

console.log(MySentence.slice(0,280));

//Return the unicode of the last character of the string.

let str="HELLO WORLD";
let lastChar=str.length;
console.log(str.charCodeAt(lastChar-1));

