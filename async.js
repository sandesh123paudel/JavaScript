//synchronous = Executes line by line consecutively in a sequential manner
//              Code that watis for an operation to be complete

// asynchronous= Allows multiple operations to be performed concurrenlty withot waiting 
//               Doesn't blick the execution flow and allows the program to continuue 
//              (I/O operations, network requests , fetching data) 
//              Handled with: callbacks, promises, async/await 4






// setTimeout(()=>console.log("Task 1"),3000);

// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");
// console.log("Task 5");



function function1(callback){
    setTimeout(()=>{
        console.log("Task 1");
        callback();
    },3000);

}
function function2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
    console.log("Task 5");
}

function1(function2);




