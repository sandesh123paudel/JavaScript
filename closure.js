//closure =>  A function defined inside of another function, 
//            the innner function has access ot the variables 
//                 and scope of the outer function. 
//              Allow fro private variables and state maintenance 
//             Used frequently in JS framework: React, Vue, Angular



function outer()
{
    let message="Hello";
    function inner(){
        console.log(message);
    }
}

outer();