// Method Chaining: Calling onem method after another in one continuoes line of code


// --------NO METHOD CHAINING-------

let username = window.prompt("Enter your username");

username=username.trim();
let letter=username.charAt(0);
letter=letter.toUpperCase();

let extraChars=username.slice(1);
extraChars=extraChars.toLowerCase();
username=letter+extraChars;

console.log(username);

///--------METHOD CHAINING