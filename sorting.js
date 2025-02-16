// sort() -> method used to sort elements of an array in place
//           Sorts elements as strings in lexicographic order, not alphabetical
//           lexicographic ={alphabetical+numebes+symbol}


// let fruits= ["apple","orange","banana","coconut","pineapple"];

// console.log(fruits.sort())

// let numbers=[1,10,6,2,45,664,6];
// console.log(numbers.sort())
// //this should be done while sorting numebrs
// console.log(numbers.sort((a,b)=>a-b));


const people = [
    { name: "Sandeesh", age: 30, gpa: 3.0 },
    { name: "John", age: 25, gpa: 3.5 },
    { name: "Jane", age: 28, gpa: 3.8 },
    { name: "Doe", age: 22, gpa: 3.2 }
];

//sort the people according to the age i.e. basicalyy numeric sorting
// people.sort((a,b)=>a.age-b.age);


//for sort by name using lexicographical order
people.sort((a,b)=>a.name.localeCompare(b.name));
console.log(people);


