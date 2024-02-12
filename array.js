//var myFriend=new Array;//optional
// var myFriend=['Gauri','Agrawal','mahima','Aakhya'];
// console.log(myFriend[myFriend.length-1]);
// console.log(myFriend.length);
// for(var i=0;i<myFriend.length;i++){
//     console.log(myFriend[i]);
// }
// for(let elements in myFriend){//index no.
//     console.log(elements);
// }
// for(let elements of myFriend){// elements name
//     console.log(elements);
// }

// myFriend.forEach(function(elements,index,array){
//     console.log(elements+" index : "+index+" array : "+array)
// });

// myFriend.forEach((element,index,array) => {
//     console.log(element+" index : "+index+" array : "+array)
// });

//===========================================================================================
// 👉👉👉👉👉👉Searching and filter in an array

var myFriend = ["Gauri","Agrawal","Mahima","Aakhya","Gauri","Agrawal"];
//👉👉Searching
console.log(myFriend.indexOf("Agrawal"));
console.log(myFriend.indexOf("Agrawa"));
console.log(myFriend.indexOf("Agrawal",3));
console.log(myFriend.lastIndexOf("Gauri"));
console.log(myFriend.lastIndexOf("Agrawal",4));
console.log(myFriend.includes("Gauri"));
//👉👉👉👉Filteration
//👉👉find method : iItreturn only one value which firstly fulfill the condition.
const prices=[700,300,350,400,500,600];
console.log(prices.find((currval)=>currval<400));
console.log(prices.find((currval)=>currval<200));//undefined
// 👉👉Find index
console.log(prices.findIndex((currval)=>currval<200));//-1
console.log(prices.findIndex((currval)=>currval<400));
// 👉👉Filter method : make an array of the elements which fulfill all the conditions.
console.log(prices.filter((currval,index)=>currval<400));
console.log(prices.filter((currval,index)=>currval<200));//Empty array when condition is not fulfilled
//👉👉Sort an array: only used with strings even if we pass no. still it firstly convert the no. in string that give the output as an ex: 25 is greater than 100 as 1 comes before/bigger then 2.

const months=['March','Jan','Feb','Dec','Nov'];
console.log(months.sort());// sort in ascending order

const array=[1,30,4,21,1000000,99]
console.log(array.sort());// gives a bug/error as it does not give the right output

//👉👉 to insert, add ,replace and delete elements in array(CRUD)
//👉👉push : add elements in the last of the array and it returns the new length of the array.
const animals =['pigs','goats','sheep'];
console.log("length of orignal array : "+animals.length)
console.log("length of new array : "+animals.push('hen','chicken'));
console.log(animals);
//👉👉unshift method : add element in starting of list and returns new length of an array.
const animal=['pigs','goats','sheep'];
console.log("length of orignal array : "+animal.length)
console.log("length of new array : "+animal.unshift('hen','chicken'));
console.log(animal);

const myNumber=[1,2,3,4,5];
console.log(myNumber.unshift(-1,0));
console.log(myNumber);

//👉👉Pop: to remove an last element from an array 
// return the element which get remove

const plants=['broccoli','onion','cauliflower','cabbage','tomato'];
console.log(plants);
console.log(plants.pop());
console.log(plants);

//👉👉shift : remove data from first index or remove first element

const plant=['broccoli','onion','cauliflower','cabbage','tomato'];
console.log(plant);
console.log(plant.shift());
console.log(plant);

//👉👉Slice method:add or removes element from an array

const month=['Jan','mar','June','april'];
const newMonth= month.splice(3,0,'Dec');//(start number : index,delete count: index,item : string);
console.log(month);
console.log(newMonth);// It return empty array when we add something in array and return removed items when we delete items from an array.
month.splice(month.length,0,'Nov');//to add data on last index
console.log(month);
const indexOfMonths=month.indexOf('mar');
if(indexOfMonths>=0){
const updatemonth=month.splice(indexOfMonths,1,'March');//Updation.
console.log(month);
}
else{
    console.log("no such data found");
}
const Index=month.indexOf('June');
if(Index>=0){
    const dltElement=month.splice(Index,1);
    console.log(dltElement);
    console.log(month)
}
else{
    console.log('no such data found');
}

// 👉👉MAP and REDUCE method : returns a new array containing the results of calling a function of every element in this array
// It return new Array without mutating the orignal array

const array4=[1,4,9,16,25];
//num>9
let newA =array4.map((currElem,index,arr)=>{
    return currElem >9;
})
console.log(array4);
console.log(newA);
let newAr=array4.map((currElem,index,arr)=>{
    return `Index no. =${index} and the value is ${currElem} belong to ${arr}`
})
console.log(newAr);

//👉👉Reduce Method : convert 3d array pr 2 d array into a 1d array.
// The reduce() method executes a reducer function ( that you provide ) on each element of the array, resulting in single output value.

//The reducer function takes four arguments :
//Accumulator
//Current value
//Current index
//Source array

let a=[5,6,2];
let sum=a.reduce((accumulator,currElem,index,a)=>{
    return accumulator+=currElem;
});
console.log("Sum of array is : "+a);
console.log(sum);
 

let b=[2,3,4,6,8];
let mul=b.map((currElem)=>currElem*2).filter((currElem)=>currElem>10).reduce((accumulator,currElem)=>accumulator+=currElem);
console.log("Orignal Array : ");
console.log(b);
console.log("multiplication of each element in array by 2 than the sum of the no. which are greater than 10 is : ")
console.log(mul);

// 👉👉How to make a 3d or 2d array in 1d (fatten an array)
//array of an array:
const c=[
    ['zone_1','zone_2'],
    ['zone_3','zone_4'],
    ['zone_5','zone_6'],
    ['zone_7','zone_8',['zone_3']]
    ];
let flatArr=c.reduce((acc,currElem)=>acc.concat(currElem));
console.log(flatArr);














