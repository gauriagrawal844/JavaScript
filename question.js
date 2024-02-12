//Difference between null and undefined.

//null(Assign null value than only it give null)
//data type:object(bug)
var iAmUseless = null;
console.log(iAmUseless);
console.log(typeof(iAmUseless));
//undefined
//data type : undefined. 
var x;
console.log(x);
console.log(typeof(x));


//What is NaN?

//NaN is a property of the global object.
//In other words, it is a variable in global scope.
//The initial value of NaN is Not-A-Number.
console.log("gauri"-"agrawal");//Example
var myPhoneNumber=9876543210;
var myName="Gauri Agrawal";
console.log(myPhoneNumber-myName);
console.log(isNaN(myPhoneNumber));//false
console.log(isNaN(myName));//true
//isNaN method is use to check whether a variable is number or not.

