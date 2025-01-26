// String Methods:  allows you to create and work or manipulate with strings


// let userName="  San  desh";
// console.log(userName);

// console.log(userName.charAt(1));

// console.log(userName.indexOf("S"));
// console.log(userName.lastIndexOf("s"));

// console.log(userName.length);


// userName=userName.trim();
// console.log(userName);

// userName="Sandesh"

// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());
// console.log(userName.repeat(2));
// console.log(userName.startsWith(" "));

// console.log(userName.includes("a"));


// let phoneNumber="123-456-789";
// console.log(phoneNumber);
// phoneNumber=phoneNumber.replaceAll("-","");
// console.log(phoneNumber);

// phoneNumber=phoneNumber.padStart(15,"s");
// console.log(phoneNumber);




///String Slicing: Creating a substring from a portion of an another string

// const fullName="Sandesh Paudel";

// let firstName=fullName.slice(0,4);
// let lastName=fullName.slice(4,8);

// let firstName=fullName.slice(0,fullName.indexOf(""));
// let lastName=fullName.slice(fullName.indexOf(""));


// console.log(firstName);
// console.log(lastName);

// let firstChar=fullName.slice(0,1);
// let lastChar=fullName.slice(-1);

// console.log(firstChar);
// console.log(lastChar);




const email="sandesh@gmail.com";

let userName=email.slice(0,email.indexOf("@"));
let extension=email.slice(email.indexOf("@")+1);

console.log(userName);
console.log(extension);

