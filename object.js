// const dog={
//     name:'Max',
//     breed:'Dachshund',
//     age:5,
//     weightInPounds:12,
//     eat:function(){
//         console.log('Champ!');
//     },
//     bark(){
//         console.log('Woof!');
//     }
// }

// function getDog(name,breed,age,weightInPounds){
//     return{
//         name,
//         breed,
//         age,
//         weightInPounds,
//         eat(){
//             console.log('Champ!');
//         },
//         bark(){
//             console.log('Woof!');
//         }
//     }
// }

// const anotherDog=getDog('nancy','jack',2,50)
// console.log(anotherDog);



///Objects are dynamic

// const person ={
//     name:'Sandesh'
// };

// person.favoriteFood='tacos';
// console.log(person);



// person.eat=function(){
//     console.log('Start Eating');
// }

// console.log(person.eat);




//Every objects in js have constructor properties
// let newObj={};

// let newOb= new Object();


// new String(); // 'Sandesh'
// new Boolean();




/// Functions are also  Objects 
// function add(num1,num2){
//     return num1+num2;
// }


// const n =add;

// console.log(n(2,3));


// function Programmer(name){
//     this.name=name;
//     this.writeCode=function(){
//         console.log('Code in JS');
//     }
// }


// console.log(Programmer.length);
// console.log(Programmer.constructor);


// const Programmer=new Function(
//     'name','thi'
// )


let username;

username=window.prompt('Whats your name?');

console.log(username);