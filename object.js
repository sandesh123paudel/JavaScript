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

const person ={
    name:'Sandesh'
};

person.favoriteFood='tacos';
console.log(person);



person.eat=function(){
    console.log('Start Eating');
}

console.log(person.eat);