//Getter and Setters

//getter :-> special method that makes a property readable
//setter :-> special method that makes a property writable


// validate and modify a value when reading/ writing a property


////Example 1
// class Rectangle{

//     constructor(width,height){
//         this.height=height;
//         this.width=width;
//     }

//     set width(newWidth){
//         if(newWidth >0){
//             this._width=newWidth;
//         }
//         else{
//             console.error("Width must be a positive number")
//         }
//     }
//     set height(newHeight){
//         if(newHeight >0){
//             this._height=newHeight;
//         }
//         else{
//             console.error("Hight must be a positive number")
//         }
//     }

//     get width(){
//         return this._width;
//     }

//     get height(){
//         return this._height.toFixed(1);
//     }

//     get area(){
//         return this._height*this._width;
//     }

// }

// const rectangle=new Rectangle(3,4);

// rectangle.height=5;
// rectangle.width=10;


// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);



// //Example 2

// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.age=age;
//     }


//     set firstName(newFirstName){
//         if(typeof newFirstName==="string" && newFirstName.length>0)
//         {
//             this._firstName=newFirstName;
//         }
//         else{
//             console.error("First Name must be a non empty string");
//         }
//     }

//     get firstName(){
//         return this._firstName;
//     }

//     set lastName(newLastName){
//         if(typeof newLastName==="string" && newLastName.length>0)
//         {
//             this._lastName=newLastName;
//         }
//         else{
//             console.error("Last Name must be an non empty string");
//         }
//     }

//     get lastName(){
//         return this._lastName;
//     }


//     get fullName(){
//         return this._firstName + " " + this._lastName;
//     }

//     set age(newAge){
//         if(typeof newAge === "number" && newAge >0){
//             this._age=newAge;
//         }
//         else{
//             console.error("Age must be a non-negative number");
//         }
//     }

//     get age(){
//         return this._age;
//     }




// }


// const person1=new Person("Sandesh","Paudel",20);
// console.log(person1.fullName);




