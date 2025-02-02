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

let numbers=[1,2,3,4,5];

numbers.forEach(double);
numbers.forEach(display);

function display(element){
    console.log(element);
}

function double(element,index,array){
    array[index]=element*2;
}