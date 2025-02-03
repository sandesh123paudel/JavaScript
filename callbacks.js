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

const numbers=[1,2,3,4,5];

const squares=numbers.map(square);

console.log(squares);

function square(element){
    return Math.pow(element,2);

}