//callback= a function that is passed as an argument to another function 

//          used to handle asynchronous operations
//          1. Reading a file
//          2. Network Requests
//          3. Interacting with database

//        "Hey, when you're donw, call this  next"


// hello(wait);


// function hello(callback)
// {
//      console.log("Hello");
//      callback();
    

// }
// function wait()
// {
//     console.log("Wait!");
// }

// function leave()
// {
//     console.log("Leave");
// }

// function goodbye()
// {
//     console.log('GOodbye')
// }


// sum(1,2,displayPage);

// function  sum(x,y,callback){
//     let result = x+y;
//     callback(result);
// }

// function displayConsole(result){
//     console.log(result);
// }


// function displayPage(result)
// {
//     document.getElementById("myH1").textContent=result;
// }



///foreach()

/// forEach() = method used to iterate over the elements of an array 
//              and apply a specified function(callback) 
//               to each element

//              array.forEach(callback)

// let numbers=[1,2,3,4,5];

// numbers.forEach(double);
// numbers.forEach(display);

// function display(element){
//     console.log(element);
// }

// function double(element,index,array){
//     array[index]=element*2;
// }


// let fruits=["orange","apple","banana","coconut"];


// fruits.forEach(upperCase);
// fruits.forEach(lowerCase);
// fruits.forEach(capitalize);
// fruits.forEach(display);

// function upperCase(element,index,array){
//     array[index]=element.toUpperCase();
// }


// function lowerCase(element,index,array){
//     array[index]=element.toLowerCase();
// }

// function capitalize(element,index,array){
//     array[index]=element.charAt(0).toUpperCase()+element.slice(1);
// }
// function display(element){
//     console.log(element);
// }




///.map()= > accepts the callback and applies that 
//          function to each element of an array, then return a new array

// const numbers=[1,2,3,4,5];

// const squares=numbers.map(square);

// console.log(squares);

// function square(element){
//     return Math.pow(element,2);

// }

// const students=["Sandesh","Patrick","Squidard","Ram"]

// const studentUpper=students.map(upperCase)
// console.log(studentUpper);

// function upperCase(element)
// {
//     return element.toUpperCase();
// }


// const dates=["2024-1-20","2025-02-20","2026-03-16"];


// console.log(dates);
// const formattedDates=dates.map(formatDate);
// console.log(formattedDates);

// function formatDate(element){
//     const parts=element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}`;

// }



///FILTER METHOD


//.filer() :-> creates a new array by filtering out the elements

// let numbers=[1,2,3,4,5];

// const evenNums=numbers.filter(isEven);
// console.log(evenNums);

// function isEven(element)
// {
//     return element%2===0?true:false;
// }


// let ages=[16,17,18,19,20];

// const adultAge=ages.filter(isAdult);
// console.log(adultAge);

// function isAdult(element){
//     return element >=18?true:false;
// }


// const words=["Apple","Orange","Banana","Kiwi","Pomegranate","Coconot"];

// const shortWordsFruits=words.filter(shortWords);
// console.log(shortWordsFruits);

// function shortWords(element){
//     return element.length >=6;
// }




/// .reduce() :-> reduce the elemts of an array to a single value

// const prices=[5,60,10,25,15,30];


// const total=prices.reduce(sum);
// console.log(total);


// function sum(accumulator,element)

// {
//     return accumulator+element;

// }


const grades=[75,50,90,80,65,95];

const maximum=grades.reduce(getMax);
const minimum=grades.reduce(getMin);


console.log(minimum);
console.log(maximum);

function getMax(accumulator,element)
{
    return Math.max(accumulator,element);
}

function getMin(accumulator,element)
{
    return Math.min(accumulator,element);
}