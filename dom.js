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

const username="";

const welcomMsg=document.getElementById("welcome-msg");

welcomMsg.textContent += username === "" ? " Guest" :username;


