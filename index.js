// Select the element with the ID 'main' and assign it to the 'mainElement' variable
const mainElement = document.querySelector('#main');

// Check if 'mainElement' exists 
if (mainElement) {
  // If 'mainElement' exists, remove it from the DOM
  mainElement.remove();
}
// Select the 'h1' element with the ID 'victory' and assign it to the 'victoryHeader' variable
const victoryHeader = document.querySelector('h1#victory');

// Create a new 'h1' element and assign it to the 'newHeader' variable
const newHeader = document.createElement("h1");

// Set the 'id' attribute of the 'newHeader' to 'victory'
newHeader.id = 'victory';

// Set the text content of the 'newHeader' to ""YOUR NAME" is the champion;"
newHeader.textContent = "Guyo is the champion;";
