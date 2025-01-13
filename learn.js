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

let course={
    name:'JavaScript',
    hours:40,
    topics:['Data Types','Functions','Objects'],
}

// course.name='Python'; //Dot Notation

// console.log(course.name); //Dot Notation


// console.log(course['name']); //Bracket Notation

// console['name']='Python'; //Bracket

// console.log(console['name']);



///Array
//Array is a collection of elements that can be of different data types

// let productColors=['Red','Blue','Green'];//Array
// //has same data type of object

// productColors[0]=24;

// console.log(productColors.length);// indexing the array
 



///Functions
//Function is a block of code that can be called by its name. It can be passed data to operate on (i.e. the parameters) and can optionally return data (the return value).
// function sayHello(name){
//     console.log('Hello '+ name);
// }


// sayHello('Sandesh');


//Types of Functions

//
function multiply(num1,num2){
    const product= num1*num2;// undefined return type
}

console.log(multiply(10,20));


function multiply(num1,num2){
    return  num1*num2;// defined return type
}

console.log(multiply(10,20));