//leap year or not
year=2020;
if(year%4==0&&year%100!=0||year%400==0)
{
    console.log("Leap year");
}
else{
    console.log("not leap year");
}
console.log("=========================================");
//truthly and falsy values in js
// falsy values:0," ",undefined,false**,NaN,null
if(Score=0){//falsy value so else statement will execute
    console.log("yehhh..!!!, we won the game...");
}
else{
    console.log("ohhh!!! we loss the game...");
}
console.log("=========================================");
//Find the area of circle, triangle and rectangle

var area= "triangle";
var pi=3.142, l=5, b=4, r=3,h=5;
if(area=="circle"){
    console.log("the area of the circle is :"+pi*r**2);
}
else if(area=="rectangle"){
    console.log("the area of the rectangle is :"+l*b);
}
else if(area=="triangle"){
    console.log("the area of the triangle is :"+(b*h)/2);
}
else{
    console.log("Enter valid data....");
}
console.log("=========================================");
// area with switch case:

var area= "circle";
var pi=3.142, l=5, b=4, r=3,h=5;
switch(area){
    case'circle':{
        console.log("the area of the circle is :"+pi*r**2);
    }
    break;
    case'rectangle':{
        console.log("the area of the rectangle is :"+l*b);
    }
    break;
    case'triangle':{
        console.log("the area of the triangle is :"+(b*h)/2);
    }
    break;
    default: {
        console.log("Enter valid data....");
    }
}
console.log("=========================================");
//  While loop...

//print no. upto 10
 var num=0;
 while(num<=10){
    console.log(num);
    num++;
 }
 console.log("=========================================");
 // Do while loop

 var num=0;
 do{
    console.log(num);
    num++
 }
 while(num<=10);
 console.log("=========================================");
 //For loop...
 // to print numbers upto 10:

 for(var i=0;i<=10;i++){
    console.log(i);
 }
 console.log("=========================================");
 // table of 8,9,12,15 using for loop:

 for(var i=1;i<=10;i++){
    console.log("8 * "+ i +" = "+8*i);
 }
 console.log("=========================================");
 for(var i=1;i<=10;i++){
    console.log("9 * "+ i +" = "+9*i);
 }
 console.log("=========================================");
 for(var i=1;i<=10;i++){
    console.log("12 * "+ i +" = "+12*i);
 }
 console.log("=========================================");
 for(var i=1;i<=10;i++){
    console.log("15 * "+ i +" = "+15*i);
 }
 console.log("=========================================");
 
