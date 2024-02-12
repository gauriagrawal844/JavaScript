const months=['Jan','march','April','June','July'];


//1. Add Dec at the end of an array?
//sol.
//months.push('Dec');
//console.log(months);
const newMonth=months.splice(months.length,0,'Dec');
console.log(months);
console.log("When we insert element in an array it give an empty string. :");
console.log(newMonth);

//2. update march to March(update)?
const indexOf=months.indexOf('march');
if(indexOf>=0){
const updateMonth=months.splice(indexOf,1,'March');
console.log(months);
}
else{
    console.log("no such data found.")
}
//3. Delete june from an array?
const index=months.indexOf('June');
if(index>=0){
const dltMonth=months.splice(index,1);
console.log(months);
console.log("when we delete element in an array it return the element which we remove. :");
console.log(dltMonth);
}

else{
    console.log("no such data found.")
}

//4. What is the return value of slice method?
//sol.
// When we insert an elemenr the return value is an empty array.
// when we dlt an element from array than return value is the array of removed element.

//1.Find the square root of each element in an array?

let arr=[25,36,49,64,81];
let NewArr=arr.map((currElem,index,arr)=>{
    return `squareroot of ${currElem} at index ${index} of an array ${arr} is ${Math.sqrt(currElem)}`
})
let arrsqr = arr.map((currElem)=>{
    return Math.sqrt(currElem)
})

console.log(NewArr);
console.log("squareroot of each element in an array is :")
console.log(arrsqr);

//2. Multiply each element by 2 and return only those elements which are greater than 10?
let Arr=[2,3,4,6,8];
let NewAr=Arr.map((currElem)=>currElem*2).filter((currElem)=>currElem>10)
// let NewAr=Arr.map((currElem)=>{
//     return currElem*2;
// }).filter((currElem)=>{
//     return currElem>10;
// })
console.log("no. of elements greater than 10 after the multiplication of 2 in each element is : ")
console.log(NewAr);



 

