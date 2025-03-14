///Arithmetic Opertors

//Addition

// let a = 10;
// let b = 20;
// let c = a + b;
// console.log(c);

// a++; //increment operator or a=a+1
// ++a;
// --a;//decrement operator or a=a-1
// a--;
// console.log(a);



////Assignment Operators
//Assingning the value of one variable to another variable

// let name="Sandesh"; //also known as single equal operator


///Comparison Operators
//Comparison operators are used to compare two values

// let x=10;
// let y=20;
// console.log(x==y);
// console.log(x!=y);
// console.log(x>y);
// console.log(x<y);   
// console.log(x>=y);
// console.log(x<=y);


//Equality Operators
//Equality operators are used to compare two values

// let a=10;
// let b='10';

// This is called type coercion means it converts the type of the variable to compare the values
// console.log(a==b); //true because it only checks the value
// console.log(a===b); //false because it checks the value and the type of the variable



//Ternaary Operator
//It is a shorthand way of writing an if-else statement
// let age=20;

// const canDrive= age>=16 ? 'Yes' : 'No';
// console.log(canDrive);


//Logical Operators

// Logical Operators
// Nullish Coalescing Operator (??)
// Logical operators are used to combine two or more conditions

// OR operator (||)
// AND operator (&&)
// NOT operator (!)

// console.log(true || true); //true
// console.log(true || false); //true
// console.log(false || true); //true
// console.log(false || false); //false

// console.log(true && true); //true
// console.log(true && false); //false
// console.log(false && true); //false
// console.log(false && false); //false

// let age=16;
// let hasCar=true;
// let canDrive= age>=16 && hasCar ? 'Yes' : 'No';

// console.log(canDrive);

//Nullish Coalescing Operator (??)
//It is used to check the null or undefined value

// let user;
// let defaultUser = "Guest";

// let userName = user ?? defaultUser;
// console.log(userName); // Output: Guest

// user = "John";
// userName = user ?? defaultUser;
// console.log(userName); // Output: John




//Logical Operators WITH nON BOOLEAN VALUES
//falsy values are false,0,empty string, null, undefined, NaN
// javascript treats the values as truthy or falsy


// let userChoosenColor='Red';
// let defaultColor='Blue';

// const currentWebsiteColor=userChoosenColor || defaultColor;
// console.log(currentWebsiteColor);



///Operator Precedence
//javascript follows the operator precedence rule to evaluate the expression
//this rules has precedence like multiplication and division has higher precedence than addition and subtraction

//  let x=10+5*2;
//  console.log(x);



///Logical Operators


// const temp=-100;

// if(temp>0 && temp<=30){
//     console.log("The weather is good");
// }
// else{
//     console.log("The weather is bad");
// }



///Spread Operators : " ... allows an iterable such an array or string to be expanded into separate elements(unpack the elements)"

// let numbers=[1,2,3,4,5,6];

// let maximum=Math.max(...numbers);

// console.log(maximum);



// let username="Sandesh Paudel";
// let letters=[...username].join("-");
// console.log(letters);


// let fruits=["apple","orange","banana"];
// let vegetables=["carrots","celery","potatoes"];
// let newFruits=[...fruits,...vegetables,"eggs"];

// console.log(newFruits);



///Rest Parameters: opposite into spread
                //(...rest) allow a function work with avariable number of arguments by bundling them in to an array



// function openFridge(...foods){
//     console.log(foods);
// }

// function getFood(...foods){
//     return foods;
// }

// const food1="pizza";
// const food2="hamburger";
// const food3="hotdog";


// // openFridge(food2,food1,food3)

// const foods=getFood("Pizza","Hamburger","HotDog");
// console.log(foods);


//Example:2
// function sum(...numbers){
//     let result=0;

//     for(let number of numbers){
//         result+=number;
//     }
//     return result;
// }


// const total=sum(1,2,3,4,5);

// console.log(total);


//Example 3

function combineStrings(...strings){
return strings.join(" ");
}

const fullName=combineStrings("Mr","Sandesh","Paudel")
console.log(fullName);