const date=new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hours = date.getHours();
const min = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();
const dayOfWeek = date.getDay();
const timeZoneOffset = date.getTimezoneOffset();

console.log("Year:", year);
console.log("Month:", month);
console.log("Day:", day);
console.log("Hours:", hours);
console.log("Minutes:", min);
console.log("Seconds:", seconds);
console.log("Milliseconds:", milliseconds);
console.log("Day of Week:", dayOfWeek);
console.log("Time Zone Offset:", timeZoneOffset);
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Day of Week (String):", daysOfWeek[dayOfWeek]);