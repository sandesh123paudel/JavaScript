// String Methods:  allows you to create and work or manipulate with strings


let userName="  San  desh";
console.log(userName);

console.log(userName.charAt(1));

console.log(userName.indexOf("S"));
console.log(userName.lastIndexOf("s"));

console.log(userName.length);


userName=userName.trim();
console.log(userName);

userName="Sandesh"

console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(2));
console.log(userName.startsWith(" "));

console.log(userName.includes("a"));


let phoneNumber="123-456-789";
console.log(phoneNumber);
phoneNumber=phoneNumber.replaceAll("-","");
console.log(phoneNumber);

phoneNumber=phoneNumber.padStart(15,"s");
console.log(phoneNumber);









