//DOM - DOCUMENT OBJECT MODEL

// 1. Selecting elements
const heading = document.getElementById('title');
const paragraphs = document.getElementsByClassName('paragraph');
const button = document.querySelector('#myButton');
const listItems = document.querySelectorAll('li');

// 2. Changing content
heading.textContent = 'New Title';
heading.innerHTML = '<span>New Title with HTML</span>';

// 3. Modifying styles
button.style.backgroundColor = 'blue';
button.style.color = 'white';

// 4. Creating new elements
const newDiv = document.createElement('div');
newDiv.textContent = 'I am a new div';
document.body.appendChild(newDiv);

// 5. Event handling
button.addEventListener('click', () => {
    alert('Button clicked!');
});

// 6. Modifying attributes
const link = document.querySelector('a');
link.setAttribute('href', 'https://example.com');
link.classList.add('active');

// 7. Removing elements
const elementToRemove = document.querySelector('.unwanted');
if (elementToRemove) {
    elementToRemove.remove();
}
