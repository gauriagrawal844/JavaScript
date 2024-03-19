//👉👉👉Date And Time in JS

//Date Methods(get and set)
//Time methods(get and set)


// JavaScript date objects represents a single moment in time in a platform-independent Format. Date objects contain a Number that represents milliseconds since 1 january 1970 UTC.

//👉 Creating Date Objects
// There are 4 ways of creating a new date object.

//  new Date()
//  new Date(year,month,day,hours,minutes,seconds,milliseconds)
 //it take 7 arguments.
 //new Date(milliseconds);
 //we cannot avoid month section
 //new Date(date string);

//👉👉new Date()
//DAte objects are created with new Date() constructor.

let currDate= new Date();
console.log(currDate);

console.log(new Date());
console.log(new Date().toLocaleString());// date/month/year , time
console.log(new Date().toString());// day Month date year time GMT+0530 (Indian Standard Time)

//👉👉Date.now()
// returns the total no. of milliseconds from 1 jan 1970 to till date.

console.log(Date.now());

//👉👉new Date(year,month,...)
// 7 numbers specify year,month,date,hour,minute,second and milliseconds (in that order)
// 👉👉👉👉JavaScript count month from 0-11: January is 0 and dec is 11

var d= new Date(2024,1,16,2,36,30,0);//year and month argument is compulsory.
console.log(d.toLocaleString());

// 👉👉new Date(dateString)
// new Date(dateString) creates a new date object from a date string 

var D=new Date("February 16, 2024  2:40:00");
console.log(D);//wrong timeS
console.log(D.toLocaleString());

// 👉👉new Date(milliseconds)
// new Date(milliseconds) creates a new date object as zero time plus milliseconds

//var a=new Date(0);
//var a=new Date(1708031727783);
var a=new Date(86400000*2);
console.log(a.toLocaleString());


//👉👉👉Dates Method

const curDate= new Date();

//👉how to get the indivisual date
console.log(curDate.toLocaleString());
console.log(curDate.getFullYear());
console.log(curDate.getMonth()); // 0-11 jan to dec
console.log(curDate.getDate());
console.log(curDate.getDay());

// 👉how to set the indivisual date
console.log(curDate.setFullYear(2024));
//The setFullYear() method can optionally set month and day.
console.log(curDate.setFullYear(2024,2,25));//in milliseconds
console.log(curDate.setMonth(3));//0-11 months//in milliseconds
console.log(curDate.setDate(20));//in milliseconds
console.log(curDate.toLocaleString());


//👉👉👉 Time Method

const curTime= new Date();

// 👉how to get the indivisual time

console.log(curTime.getTime());
// The getTime() method returns the no. of milliseconds since january 1, 1970
console.log(curTime.getHours());
// The getHours() method returns the hours of a date as a number (0-23)
console.log(curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds());

// 👉how to set the indivisual time

//console.log(curTime.setTime());
console.log(curTime.setHours(5));
console.log(curTime.setMinutes(5));
console.log(curTime.setSeconds(5));
console.log(curTime.setMilliseconds(5));

//Practice time
console.log(new Date().toLocaleTimeString()); // 3:14:56 am/pm
console.log(new Date().toLocaleDateString()); // 16/2/2024
console.log(new Date().toLocaleString());// 16/2/2024, 3:15:20 am/pm






 
