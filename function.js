function sum(a,b){//parameters(a,b)
    var total=a+b;
    console.log(total);
} 
sum()//NaN
sum(10,20);//arguments(10,20)
sum(450,6328)

//diff b/w function parameter and function arguments
// Function parameters are the names listed in the function's definition.
//Function arguments are the real values passed to the function.

//why function?
// You can reuse the code: Define the code once, and use it many times.
// You can use the same code many times with different arguments,to produce different results.

//or

// A function is a group of reusable code which can be called anywhere in your program.
// This eliminates the need of writing the same code again and again.

// Function expression
// "Function expressions simply means create a function and put it into the variable funExp."

function sum(a,b){
    var total=a+b;
    console.log(total);
} 
var funExp=sum(10,20);
funExp;

// Return keyword:
// when js reaches a return CSSLayerStatementRule, the function will stop executing.
// Function often computr a return value.
// The return value is "returned" back to the "caller".

function sum(a,b){
   return total=a+b;
} 
var funExp=sum(10,20);
console.log(funExp);

//Anonymous Function

// A function expression is similar to and has the same syntax as a function declaration One can define "named" function expression (where the name of the expression might be used in the call stack for example)
// or "anonymous" function expressions.

var funExp = function sum(a,b){
    return total=a+b;
 } 
 var s=funExp(5,15);
 console.log(s);
