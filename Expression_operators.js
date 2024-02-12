//ExponentIAL OPERATOR
console.log(3**3);//27
console.log(3**5);//243
console.log(9**2);//81
//Swap two no. using third variable
var a=10;
var b=20;
console.log("a :"+a,"b :"+b);
var c=b;
b=a;
a=c;
console.log("a :"+a,"b :"+b);
// swap two no. without using third variable
var a=10;
var b=20;
console.log("a :"+a,"b :"+b);
a=a+b;//a=30 b=20
b=a-b;//b=10 a=30
a=a-b;//a=20 b=10
console.log("a :"+a,"b :"+b);
// == and === concept
var num1=5;
var num2='5';
console.log(num1==num2);// true (only check the values)
console.log(num1===num2);//false (check value and datatype both)


