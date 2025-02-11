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

// this doesn't work with arrow function


// const person1={
//     name:"Sandesh",
//     favFood:"hamburgers",
//     sayHello:function(){console.log(`Hi I am ${this.name}`)},
//     eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
// }

// person1.eat();

// const person2={
//     name:"Patrick",
//     favFood:"Pizza",
//     sayHello:function(){console.log(`Hi I am ${this.name}`)},
//     eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
// }

// person2.eat();



///Constructors: special method for defining the properties and methods of objects

// function Car(make,model,year,color){
//     this.make=make,
//     this.model=model,
//     this.year=year,
//     this.color=color,
//     this.drive=function(){console.log(`You drive the ${this.model}`)}
// }

// const car1=new Car("Ford","Mustang","2024","Red");
// const car2=new Car("Chevrolet","Camaro","2025","Blue")


// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);

// car1.drive();
// car2.drive();





//nested objects => objects inside of our objects
//                  allows you to represent more complex data strucutres
//                  Child Object is enclosed by a parent object

//                  Person{Address{},ContactInfo{}}
//                  ShoppingCart{Keyword{}, Mouse{}, Monitor{}}

const person={
    fullName: "Sandesh Paudel",
    age:30,
    isStudent:true,
    hobbies:["karate","jellyfishing","cooking"],
    address:{
        street: "124 Conch St.",
        city: "Bikini",
        country:"Int. Water"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.address);



