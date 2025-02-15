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


// function isValidEmail(email){
//     return  email.includes("@") ? true: false;
// }

// console.log(isValidEmail("sandeshgmail.com"));





/// function declaration => define a resuable block of code that performs a specific task



// function hello(){
//     console.log("Hello");
// }

///function expressions => a way to define functions as values or variables

// const hello=function(){
//     console.log("Hello");
// }



// setTimeout(function(){
//     console.log("Hello");
// },3000);


// const numbers=[1,2,3,4,5,6];
// const squares=numbers.map(square);
// console.log(squares);

// function square(element){
//     return Math.pow(element,2);
// }



// const numbers=[1,2,3,4,5,6];
// const squares=numbers.map( function(element){
//         return Math.pow(element,2);
// });

// const evenNums=numbers.filter(function(element){
//     return element%2===0;
// })

// console.log(squares);
// console.log(evenNums);





//// Arrow Functions:=> a consise way to write function expressions
//                       good for simple functions that yoy use only once 
//                      (parameters) => some code


// const hello=() =>console.log("Hello");

// hello();


// const hello =(name,age)=>{console.log(`Hello ${name}`)
//                         console.log(`You are ${age} years old` )};

// hello("Sandesh",22);



// setTimeout(()=>console.log("Hello"),3000);

const numbers=[1,2,3,4,5,6];

const squares=numbers.map((element)=>Math.pow(element,2));
console.log(squares);


const cubes=numbers.map((element)=>Math.pow(element,3));
console.log(cubes);

const evenNums=numbers.filter((element)=>element%2===0);
console.log(evenNums);


// const add=(x,y)=>x+y;

// console.log(add(3,2));



// const isValidEmail=(email)=>email.includes("@") ? true: false;

// console.log(isValidEmail("sandeshgmail.com"));


// const happyBirthday=(username,age)=>console.log(`Happy Birthday to you ${username} for your ${age} years!!`);

// happyBirthday("Sandesh",22);
// happyBirthday("Ram",30);


// const numbers=[1,2,3,4,5,6];
// const squares=numbers.map((element)=>Math.pow(element,2));
// console.log(squares);

// const evenNums=numbers.filter((element)=>element%2===0);
// console.log(evenNums);


// const add=(x,y)=>x+y;
// console.log(add(3,2));


// const isValidEmail=(email)=>email.includes("@") ? true: false;
// console.log(isValidEmail("sandeshgmail.com"));