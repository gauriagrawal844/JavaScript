//👉👉👉Math Object in js: 

//The js math object allows you to perform mathematical tasks on numbers.

console.log(Math.PI);
// 👉Math.round()
// returns the value of x rounded to its nearest integer

let num=10.499;
console.log(Math.round(num));//10
let num1=10.501;
console.log(Math.round(num1));//11

//👉Math.pow()
// Math.power(x,y) returns the value of x to the power of y.

console.log(Math.pow(2,3))//8
console.log(2**3)//8(Also gives power.)

//👉Math.sqrt()
//Math.sqrt(x) returns the square root of x

console.log(Math.sqrt(25));
console.log(Math.sqrt(81));
console.log(Math.sqrt(66));

//👉Math.abs()
//Math.abs(x) returns the absolute (positive ) value of x.It never gives negative value.

console.log(Math.abs(-55));
console.log(Math.abs(-55.5));
console.log(Math.abs(-955));
console.log(Math.abs(55));
console.log(Math.abs(4-6));

//👉Math.ceil()
//Math.ceil(x) returns the value of x rounded up to its nearest integer.(Always give upper value in integer).

console.log(Math.ceil(4.51));
console.log(Math.ceil(99.1));

//👉Math.floor()
//Math.floor(x) returns the value of x rounded down to its nearest integer.(Always give lower value in integer).

console.log(Math.floor(4.51));
console.log(Math.floor(99.1));

//👉Math.min()
//Math.min() can be used to find the lowest value in a list arguments.

console.log(Math.min(0,150,30,20,-8,-200));

//👉Math.max()
//Math.max() can be used to find the highest value in a list arguments.

console.log(Math.max(0,150,30,20,-8,-200));

//👉Math.random()
//Math.random() returns number between 0(inclusive) and 1(exclusive).

console.log(Math.random());//0 to 1
console.log(Math.random()*10);//0 to 9
// only first no.
console.log(Math.floor(Math.random()*10));//0 to 9

//👉Math.trunc()
//The trunc() method returns the integer part of a number.(DO not neturn the no. after decimal)

console.log(Math.trunc(4.6));
console.log(Math.trunc(-99.1));

//Practic time:
//if the argumnet is a positive number, Math.yrunc() is equivalent to MAth.floor() otherwise Math.trunc() is equivalent to Math.ceil().











