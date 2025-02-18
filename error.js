//Error = An object that is created to represent a problem that occurs
//        Occurs often with user input or establishing a connection

// try{} = Encloses code that might potentially cause an error
// catch{}= Catch and handle any thrown Errors from try{}
// finally{} = (optional) Always executes.Used mostly for clean up
//              ex. close files, close connections, release resources





// try{
//     console.log("Hello");
//     // NETWORK ERRORS
//     // PROMISE ERRORS
//     // SECURITY ERRORS

// }
// catch(error){
//     console.error(error);
// }
// finally{
//     // close files
//     // close connections
//     // release resources
//     console.log("This always executes");
// }

// console.log("You have reached the end");



try{
    const divident = Number(window.prompt("Enter a dividend"));
    const divisor = window.prompt("Enter a divisor");

    if(divisor===0){
        throw new Error("You can't divide by 0");
    }
    if(isNaN(divident) || isNaN(divisor)){
        throw new Error("You can only Use Numeric Values");

    }


    const result=divident/divisor;

    console.lag(result);

}catch(error){
    console.error(error);
}
console.log("You have reached the end");

