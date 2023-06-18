// Select the <body> element and assign it to the 'back' variable
const back = document.querySelector("body");

// Select the elements with 'data-start' and 'data-stop' attributes and assign them to the 'start' and 'stop' variables, respectively
const start = document.querySelector("[data-start]");
const stop = document.querySelector("[data-stop]");

// Initialize the 'timerID' variable to keep track of the interval ID
let timerID = null;

// Add an event listener to the 'start' element, which triggers the 'startColors' function when clicked
start.addEventListener("click", startColors);

// Add an event listener to the 'stop' element, which triggers the 'stopColors' function when clicked
stop.addEventListener("click", stopColors);

// Function to start changing the background color
function startColors() {
  // Set the initial background color to a random hex color
  back.style.backgroundColor = getRandomHexColor();

  // Set an interval to change the background color every second
  timerID = setInterval(() => {
    back.style.backgroundColor = getRandomHexColor();
  }, 1000);

  // Disable the 'start' button and enable the 'stop' button
  start.disabled = true;
  stop.disabled = false;
}

// Function to stop changing the background color
function stopColors() {
  // Clear the interval by using the interval ID stored in 'timerID'
  clearInterval(timerID);

  // Enable the 'start' button and disable the 'stop' button
  start.disabled = false;
  stop.disabled = true;
}

// Function to generate a random hex color
function getRandomHexColor() {
  // Generate a random number between 0 and 16777215 (decimal representation of the maximum hex color value)
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16) // Convert the random number to a hexadecimal string
    .padStart(6, "0"); // Pad the string with leading zeros if necessary to ensure it has 6 digits

  // Return the hex color string in the format '#RRGGBB'
  return `#${randomColor}`;
}
