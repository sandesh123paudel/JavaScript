/**
 * DOM Manipulation Example
 * 
 * This script demonstrates various common operations on the Document Object Model (DOM) using JavaScript.
 * 
 * 1. Selecting elements:
 *    - `document.getElementById('title')`: Selects an element by its ID.
 *    - `document.getElementsByClassName('paragraph')`: Selects elements by their class name.
 *    - `document.querySelector('#myButton')`: Selects the first element that matches the CSS selector.
 *    - `document.querySelectorAll('li')`: Selects all elements that match the CSS selector.
 * 
 * 2. Changing content:
 *    - `element.textContent`: Sets or gets the text content of an element.
 *    - `element.innerHTML`: Sets or gets the HTML content of an element.
 * 
 * 3. Modifying styles:
 *    - `element.style.property`: Sets the style property of an element.
 * 
 * 4. Creating new elements:
 *    - `document.createElement('tagName')`: Creates a new element with the specified tag name.
 *    - `parentElement.appendChild(newElement)`: Appends a new child element to the parent element.
 * 
 * 5. Event handling:
 *    - `element.addEventListener('event', callback)`: Adds an event listener to an element.
 * 
 * 6. Modifying attributes:
 *    - `element.setAttribute('attribute', 'value')`: Sets the value of an attribute on an element.
 *    - `element.classList.add('className')`: Adds a class to the element's class list.
 * 
 * 7. Removing elements:
 *    - `element.remove()`: Removes the element from the DOM.
 */
//DOM - DOCUMENT OBJECT MODEL



// console.log(document);



// document.title="DOM";
// document.body.style.backgroundColor="hsl(0,0%,15%)";
// console.dir(document);

// const username="";

// const welcomMsg=document.getElementById("welcome-msg");

// welcomMsg.textContent += username === "" ? " Guest" :username;




// element selectors=  Methods used to target and manipulate HTML elements 
//                      They allow you to select one or multiple HTML elements 
//                      from the DOM(DOcument Object Model)


//1. document.getElementbyId()          //ELEMENT OR NULL
//2. document.getElementsClassName()    //HTML COLLECTION
//3. document.getElementByTagName()     //HTML COLLECTION
//4. document.querySelector()           //ELEMENT OR NULL
//5. document.querySelectorAll()        //NODELIST


// const myHeading= document.getElementById("my-heading");
// myHeading.style.backgroundColor="black";


// const fruits=document.getElementsByClassName("fruits");

// fruits[2].style.backgroundColor="yellow";
// console.log(fruits);









//// DOM Navigation

//DOM Navigation: The process of navigating through the structure of an HTML document using JS


// .firstElementChild
// .lastElementChild
// .nextElementsSibling
// .previousElementsSibling
// .parentElement
// .children




//----------------------.firstElementChild------------------

// const element=document.getElementById("fruits");

// const firstChild=element.firstElementChild;
// firstChild.style.backgroundColor="yellow";


//for all list

// const ulElements=document.querySelectorAll("ul");

// ulElements.forEach(ulElement=>{
//         const firstChild=ulElement.firstElementChild;
//         firstChild.style.backgroundColor="yellow";
// });




//----------------------.lastElementChild------------------


// const element=document.getElementById("fruits");
// const lastChild=element.lastElementChild;
// lastChild.style.backgroundColor="bluw";


//for all list


// const ulElements=document.querySelectorAll("ul");
// ulElements.forEach(ulElement=>{
//     const lastChild=ulElement.lastElementChild;
//     lastChild.style.backgroundColor="red";

// });


//----------------------.nextElementSibling-----------------


// const element=document.getElementById("cake");
// const nextSibling=element.nextElementSibling;
// nextSibling.style.backgroundColor="yellow";


//----------------------.previousElementSibling-----------------


// const element=document.getElementById("raddish");
// const previousSibling=element.previousElementSibling;
// previousSibling.style.backgroundColor="yellow";


//----------------------.parentElement-----------------


// const element=document.getElementById("apple");
// const parent=element.parentElement;
// parent.style.backgroundColor="yellow";


//----------------------.childrenElement-----------------


const element=document.getElementById("fruits");
const children=element.children;

//for individual 
children[1].style.backgroundColor="red";


//for  all child
// Array.from(children).forEach(child=>{
//     child.style.backgroundColor="";
// })