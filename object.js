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


// let username;

// username=window.prompt('Whats your name?');

// console.log(username);





///OBJECT :  A  collection of related properties and/or methods 
//          can represent real wordl objects(people,products,places) 
//           object={key:value, function()} 

// const person1={
//     firstName:"Sandesh",
//     lastName:"Paudel",
//     age:30,
//     isEmployed:true,
//     sayHello:function(){console.log("Hi, I am Sandesh")},
//     eat: function(){console.log("I am eating a Krabby Patty")}
// };

// const person2={
//     firstName:"Patrick",
//     lastName:"Star",
//     age:42,
//     isEmployed:false,
//     sayHello:()=>console.log("Hey, I am Patrick!"),
//     eat:()=>console.log("I am eating a Chicken Pizza")


// };

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);

// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);

// person1.sayHello();
// person2.sayHello();

// person1.eat();
// person2.eat();



///THIS keyword

const person1={
    name:"Sandesh",
    favFood:"hamburgers",
    sayHello:function(){console.log(`Hi I am ${this.name}`)}
}

person1.sayHello();