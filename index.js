// Write your code here!

// 1) Select and remove the main element
const mainElement = document.querySelector('main#main');
mainElement.remove(); // This removes the <main> element from the DOM

// 2) Create a new <h1> element
const newHeader = document.createElement('h1');

// 3) Set the ID of the new <h1> to 'victory'
newHeader.id = 'victory';

// 4) Set the text content of the new <h1>
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with your actual name