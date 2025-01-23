//How to accept the user input


// 1. Easy Way:  with window  prompt
// 2. Professional Way: HTML Textbox


// let username;

// // username=window.prompt('What is your name?');

// // console.log(username);

// document.getElementById('mySubmit').onclick=function(){
//     username=document.getElementById("myText").value;
//     document.getElementById('myH1').textContent=`Hello ${username}`;
//     console.log(username);



// }





// Type Conversion = Change the datatype of a value to another (strings, numbers, booleans)

// let age= window.prompt('Enter your age:');

// age=Number(age); //This changes the entered string value to numeric one
// age+=1;

// console.log(age);


// let x=25;
// let y="";
// let z=65;

// x=Number(x);

// y=String(y);
// z=Boolean(z);

// console.log(x,typeof(x));
// console.log(y,typeof(y));
// console.log(z,typeof(z));


const PI=3.1465; /// we can make this const so that we cannot change that further in any line of code
let radius;
let circumference;


// radius = window.prompt("Enter a radius");
// radius=Number(radius);



document.getElementById('mySubmit').onclick=function(){
    radius=document.getElementById("myText").value;
    radius=Number(radius);

    circumference = 2 * PI * radius;

    document.getElementById('result').textContent= `The Circumference is ${circumference}`;


}




