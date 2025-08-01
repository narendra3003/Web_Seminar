// -------------------------
// Section 1: Basic Syntax and Concepts
// -------------------------

// 1. Variables and Data Types
let name = "College Website"; // string
const pi = 3.14; // number
let isResponsive = true; // boolean
let students = ["Alice", "Bob", "Charlie"]; // array
let user = { name: "Alice", year: 2 }; // object

// 2. Console Output
console.log("Welcome to JS Basics!");

// 3. Comments
// This is a single-line comment
/* This is a 
   multi-line comment */

// -------------------------
// Section 2: Functions and Control Flow
// -------------------------

// 4. Functions
function greetUser(name) {
  return `Hello, ${name}!`;
}

// 5. Conditionals
if (user.year === 2) {
  console.log("You are eligible for this session.");
} else {
  console.log("This session is for 2nd year students only.");
}

// 6. Loops
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// -------------------------
// Section 3: DOM Manipulation
// -------------------------

// 7. Accessing Elements
const heading = document.getElementById("main-heading");
const links = document.querySelectorAll("a");

// 8. Changing Content
heading.innerText = "Welcome to Our College Site";

// 9. Changing Styles
  heading.style.color = "purple"; 

// -------------------------
// Section 4: Events
// -------------------------

// 10. Click Event
const button = document.getElementById("submitBtn");
button.addEventListener("click", function () {
  alert("Form Submitted!");
});

// 11. Input Event
const input = document.getElementById("nameInput");
input.addEventListener("input", function (e) {
  console.log("You typed: ", e.target.value);
});

// -------------------------
// Section 5: Practical Mini Tasks
// -------------------------

// Task 1: Toggle dark mode
const toggleBtn = document.getElementById("toggleDark");
toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Task 2: Show/Hide Info (Hidden Section)
const showBtn = document.getElementById("showBtn");
const hiddenSection = document.getElementById("hiddenSection");

showBtn.addEventListener("click", function () {
  if (hiddenSection.style.display === "none") {
    hiddenSection.style.display = "block";
  } else {
    hiddenSection.style.display = "none";
  }
});

// Task 3: Greeting Form
const greetForm = document.getElementById("greetForm");
const usernameInput = document.getElementById("username");
const greeting = document.getElementById("greeting");

greetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  greeting.textContent = `Hello, ${usernameInput.value}!`;
});

// Task 4: Blinking Text
const blinker = document.getElementById("blinker");
setInterval(() => {
  blinker.style.visibility = blinker.style.visibility === "hidden" ? "visible" : "hidden";
}, 500);

// Task 5: Auto-scrolling Text
const scrollText = document.querySelector(".scroll-text");
setInterval(() => {
  scrollText.scrollTop += 1;
  if (scrollText.scrollTop >= scrollText.scrollHeight - scrollText.clientHeight) {
    scrollText.scrollTop = 0;
  }
}, 50);

// Button Event: Show an alert when "Click Me!" is pressed by the person in the text field
const clickMeBtn = document.getElementById("clickMeBtn");
const clickedBy = document.getElementById("clicker");

clickMeBtn.addEventListener("click", function () {
  const name = clickedBy.value.trim();
  if (name) {
    alert(`${name} clicked the button!`);
  } else {
    alert("Button was clicked!");
  }
});

// // -------------------------
// // Section 6: Debugging Example
// // -------------------------

// Find and fix the issue
function calculateTotal(price, tax) {
  // bug: wrong operator used
  return price + price * tax; // should be: price * (1 + tax)
}

// console.log(calculateTotal(100, 0.18)); // Output should be 118

// -------------------------
// Section 7: Homework Ideas
// -------------------------

/*
try on your own:
1. Build a simple interactive form that greets the user on submission.
2. Add a dark mode toggle to your webpage.
3. Show a hidden section on clicking a button.
*/