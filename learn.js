// console.log("Hello, world!");


//Variables --Named storage for data
//camelCase notation

// var a= "Sandesh";
// console.log(a);


// let firstName;
// firstName='Sandesh';
// firstName='Kumar';
// console.log(firstName);




//// Data Types

//Primitive Data Types
// let a=10; //Number
// let b=10.5; //Number
// let c='Sandesh'; //String
// let d=true; //Boolean
// let e; //Undefined
// let f=1111111111111111111111n; //BigInt
// const g=Symbol(); //Symbol
// const h=null; //Null is also a type of object
// let course={
//     name:'JavaScript',
//     hours:40,
// }//Object

// console.log(typeof h);


//Dynamically Data Types
//can assign any type of data to a variable

// let firstName='Sandesh';
// firstName=10;
// firstName=true;


//OBJECTS
// object is a fundamental data type which is the  collection of key-value pairs
// reference data type

// let course={
//     name:'JavaScript',
//     hours:40,
//     topics:['Data Types','Functions','Objects'],
// }

// course.name='Python'; //Dot Notation

// console.log(course.name); //Dot Notation


// console.log(course['name']); //Bracket Notation

// console['name']='Python'; //Bracket

// console.log(console['name']);



///Array
//Array is a collection of elements that can be of different data types

// let productColors=['Red','Blue','Green'];//Array
// //has same data type of object

// // productColors[0]=24;

// // console.log(productColors.length);// indexing the array

// for (let i=0;i<productColors.length;i++){
//     console.log(productColors[i]);
// }

// //reverse order
// for (let i=productColors.length-1;i>=0;i--){
//     console.log(productColors[i]);
// }

// //New Method
// for(let product of productColors){
//     console.log(product);
// }
 



///Functions
//Function is a block of code that can be called by its name. It can be passed data to operate on (i.e. the parameters) and can optionally return data (the return value).
// function sayHello(name){
//     console.log('Hello '+ name);
// }


// sayHello('Sandesh');


//Types of Functions

//
// function multiply(num1,num2){
//     const product= num1*num2;// undefined return type
// }

// console.log(multiply(10,20));


// function multiply(num1,num2){
//     return  num1*num2;// defined return type
// }

// console.log(multiply(10,20));



///Variable Scopes== where a varaible is recognized and accessible (local vs global)


// let x=3;//global variable

// function1();

// function function1(){
//     let x=2;
//     console.log(x);
// }

// function function2(){
//     console.log(x);
// }





//// //Destructuring -> extract values from arrays and objects, 
    // then assign them to variables in a convenient way 
    // []= to perfrom array destructuring 
    // {}=> to perform object destructuring


// EXAMPLE 1
// Swap the values of two variables


// let a=1;
// let b=2;

// [a,b]=[b,a];

// console.log(a);
// console.log(b);

//Example 2
// Swap two elements in a array


// const colors=["red","green","blue","black","white"];


// [colors[0],colors[4]]=[colors[4],colors[0]];


// console.log(colors);

// Example 3

//Assign array elements to variabls


// const colors=["red","green","blue","black","white"];

// const [firstColor,secondColor,thirdColor,...extraColors]=colors;


// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);


// Example 4

//Extract values from objects


// const person1={
//     firstName:"Sandesh",
//     lastName:"Paudel",
//     age:22,
//     job:"Fry Cook"
// }

// const person2={
//     firstName:"Patrick",
//     lastName:"Star",
//     age:34
// }

// const {firstName,lastName,age,job}=person1;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);


//Example 5
//Destructure in function parameters]

function displayPerson({firstName,lastName,age,job}){
    console.log(`name:${firstName} ${lastName}`);
    console.log(`age:${age}`);
    console.log(`job:${job}`);

}

const person1={
    firstName:"Sandesh",
    lastName:"Paudel",
    age:22,
    job:"Fry Cook"
}

const person2={
    firstName:"Patrick",
    lastName:"Star",
    age:34
}

displayPerson(person1);
displayPerson(person2);


