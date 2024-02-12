// javascript was created in 1996.
// in 1997 ECMAScript is created.(javascript ko phechan dilane ko js ko ecma international m submitt kra jha uska naam ecmascript pd gya)
//2015- ECMAScript 2015 or ES6
//2016- ECMAScript 2016 or ES7
//2017- ECMAScript 2017 or ES8
//2018- ECMAScript 2018 or ES9
//2019- ECMAScript 2019 or ES10
//2020- ECMAScript 2020 or ES11

//Ecma script 2015::
// let and const
// template strings
// default arguments
// destructuring
// object properties
// Arrow function
//spread operators
//rest operators
//=========================================================================================================
//  LET vs CONST vs VAR
// var: function scope
// let and const : block scope

//=========================================================================================================

// var myName ="Miss Agrawal";
// console.log(myName);

// myName="Gauri AGrawal";
// console.log(myName);

//=========================================================================================================

// let myName ="Miss Agrawal";
// console.log(myName);

// myName="Gauri AGrawal";
// console.log(myName);

//=========================================================================================================
// const variables can not be changed.
// const myName ="Miss Agrawal";
// console.log(myName);

// myName="Gauri AGrawal";
// console.log(myName);

//=========================================================================================================

// function biodata(){
//     let myName ="Gauri";
//     console.log(myName);
//     if(true){
//         let lastname="Agrawal";
//         console.log("inner "+lastname);
//         console.log("inner "+myName);
//     }
    
//     console.log("innerOuter "+lastname);// Error:let and const are block scope
    
// }
// console.log("innerOuter "+myName);// Error:let and const are block scope
// biodata();

//=======================================================================================================

// TEMPLATE LITERALS

// JAVASRCIPT program to print table for given number(8)?

// for(let num=1; num<=10;num++){
//     let tableOf=12;
//     console.log(` ${tableOf}*${num}=${num*tableOf}`)
// }

//=======================================================================================================

// Default Arguments
// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

// function mul(a,b=5){// default parameter
//     return a*b;
// }
// console.log(mul(5));

//======================================================================================================
  
//FAT arrow function

// normal way of writing a function

// console.log(sum());

// function sum(){
//     let a=5;b=6;
//     let sum=a+b;
//     return ` the sum of the two number is ${sum}`;
// }

//how to convert it into Fat Arrow function:
// phle define usk bd call
const sum = () => {
    // let a=5;b=6;
    // let sum=a+b;
    //return ` the sum of the two number is ${sum}`;
    return ` the sum of the two number is ${(a=5)+(b=6)}`;
}
console.log(sum());
const mul = () => ` the sum of the two number is ${(a=5)*(b=6)}`;
console.log(mul());
