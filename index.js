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


// const PI=3.1465; /// we can make this const so that we cannot change that further in any line of code
// let radius;
// let circumference;


// radius = window.prompt("Enter a radius");
// radius=Number(radius);



// document.getElementById('mySubmit').onclick=function(){
//     radius=document.getElementById("myText").value;
//     radius=Number(radius);

//     circumference = 2 * PI * radius;

//     document.getElementById('result').textContent= `The Circumference is ${circumference}`;


// }



/// Math - Builtin object that provides a collection of properties and methods


// let x=82.2332;
// let y=2;
// let z;


// z=Math.round(x);
// console.log(z);

// z=Math.pow(x,y);
// console.log(z);

// z=Math.sqrt(x);
// console.log(z);

// z=Math.ceil(x);
// console.log(z);

// z=Math.floor(x);
// console.log(z);

// z=Math.min(2,3,4,5,6,7,1,0,-1,-2);
// console.log(z);

// z=Math.max(2,3,4,5,6,7,1,0,-1,-2);
// console.log(z);

// z=Math.random();
// console.log(z);

// z=Math.floor(Math.random()*10);


// const min=50, max=100;
// let randomNumber= Math.floor(Math.random()*(max-min))+min;
// console.log(randomNumber);


let randomNumber;
const myButton=document.getElementById('submit');
const myLabel=document.getElementById('result')
const min=1;
const max=6;

myButton.onclick=function()
{
   randomNumber=Math.floor(Math.random()*max+min);
   myLabel.textContent='Generated Random Number is: '+ randomNumber;
}