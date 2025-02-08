//class-> (ES6 function) provides a more structured and cleaner way to 
//          work with the objects compared to traitional construstor funcitons 
//          ex.static keyword,encapsulation,inheritance 

// class Product{
//     constructor(name,price){
//         this.name=name;
//         this.price=price;
        
//     }

//   //inside a class there is no need to write function keyword

//     displayProduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: ${this.price.toFixed(2)}`);

//     }


//     calculateTotal(salesTax){
//         return this.price + (this.price*salesTax);
//     }


// }

// const salesTax=0.05;

// const product1=new Product("Shirt",1000.00);
// const product2=new Product("Pant",1200.00);
// const product3=new Product("Underwear",100.00);


// product1.displayProduct();
// const total= product1.calculateTotal(salesTax);
// console.log(`Total Price (with tax): ${total.toFixed(2)}`)




///Static = keyword that defines properties or methods that belong
//           to a class itself rather than the objects created 
//             from that class (class owns anything static, not the objects)


//Example 1

// class MathUtil{
//     static PI=3.14159;

//     static getDiameter(radius){
//         return radius *2;
//     }


//     static getCircumference(radius){
//         return 2 * this.PI * radius;
//     }


//     static getArea(radius){
//         return this.PI * radius * radius;
//     }

// }


// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));



//Example 2

// class User{
//     static userCount=0;

//     constructor(username){
//         this.username=username;
//         User.userCount++;

//     }

//     static getUserCount()
//     {
//         console.log(`There are ${User.userCount} users online`);
//     }

//     sayHello(){
//         console.log(`My username is ${this.username}`);

//     }
//     P
// }


// const user1=new User("Sandesh");
// const user2=new User("Patrick");
// const user3=new User("Sandy");
// // console.log(user1.username);
// // console.log(user2.username);
// // console.log(user3.username);

// user1.sayHello();
// user2.sayHello();
// user3.sayHello();




// // Uts static so class reference i.e. object cannot be used to called that rather 
// // class itself will call
// console.log(user1.userCount);
// console.log(User.userCount);

// User.getUserCount;



