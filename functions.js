//FUnction: A Section of reusable code
//          Declare code once,use it whenever you want
//          Call the function to exevute the code



// function happyBirthday(username, age){//temporary variables also called parameters
//     console.log(`Happy Birthday to you ${username} for your ${age} years!!`);
// }


// happyBirthday("Sandesh",22);//passing the arguments


// happyBirthday("Ram",30);



// function add(x,y){
//     return x+y;
// }

// console.log(add(3,2));


function isValidEmail(email){
    return  email.includes("@") ? true: false;
}

console.log(isValidEmail("sandeshgmail.com"));