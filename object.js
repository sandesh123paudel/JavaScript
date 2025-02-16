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

// const person={
//     fullName: "Sandesh Paudel",
//     age:30,
//     isStudent:true,
//     hobbies:["karate","jellyfishing","cooking"],
//     address:{
//         street: "124 Conch St.",
//         city: "Bikini",
//         country:"Int. Water"
//     }
// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[2]);
// console.log(person.address.country);

// for(const property in person.address){
//     console.log(person.address[property])
// }

// class Person{
//     constructor(name,age,...address){
//         this.name=name;
//         this.age=age;
//         this.address=new Address(...address);
//     }
// }

// class Address{

//     constructor(street, city,country){
//         this.street=street;
//         this.city=city;
//         this.country=country;
//     }
// }

// const person1=new Person("Sandesh Paudel",30,"Raninbari Kathmandu","Kathmandu","Nepal");

// console.log(person1.name);
// console.log(person1.address.city);
// console.log(person1.age);
// console.log(person1.address.street);

// //Arrays of Objects

const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "banana", color: "yellow", calories: 105 },
  { name: "orange", color: "orange", calories: 62 },
  { name: "grape", color: "purple", calories: 3 },
  { name: "strawberry", color: "red", calories: 4 },
];

const cars = [
  { make: "Ford", model: "Mustang", year: 2024, color: "Red" },
  { make: "Chevrolet", model: "Camaro", year: 2025, color: "Blue" },
  { make: "Tesla", model: "Model S", year: 2023, color: "White" },
  { make: "BMW", model: "X5", year: 2022, color: "Black" },
  { make: "Audi", model: "Q7", year: 2021, color: "Silver" },
];

const people = [
  { firstName: "John", lastName: "Doe", age: 30, isEmployed: true },
  { firstName: "Jane", lastName: "Smith", age: 25, isEmployed: false },
  { firstName: "Emily", lastName: "Jones", age: 35, isEmployed: true },
  { firstName: "Michael", lastName: "Brown", age: 40, isEmployed: false },
  { firstName: "Sarah", lastName: "Davis", age: 28, isEmployed: true },
];

// console.log(fruits[0].name);

//add new array
// fruits.push({name:"sugarcane",color:"grey",calories:100});
// console.log(fruits);

//delete the latest one
// fruits.pop();

// delete array of certatain positioon
// fruits.splice(1, 2);
// console.log(fruits);

//for Each to loop throguh each elemtn

// fruits.forEach(fruit=>console.log(fruit.calories));

//-----------map()------------
//map methods return the element in new array

// const fruitNames=fruits.map(fruit=>fruit.name);
// const fruitColor=fruits.map(fruit=>fruit.color);

// console.log(fruitNames);
// console.log(fruitColor);

//------------filter()

// returns new array with the filtered elements

// const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
// const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

// console.log(yellowFruits);
// console.log(lowCalFruits);

// -----------------reduce-------------

const maxFruit = fruits.reduce((max, fruit) => 
                                fruit.calories > max.calories ? 
                                fruit:max);
                            
console.log(maxFruit);
