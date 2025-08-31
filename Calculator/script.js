// Select elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn, .operator");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");

// Add event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    display.value += button.textContent; // append button value to display
  });
});

// Clear button
clearBtn.addEventListener("click", () => {
  display.value = ""; // empty the display
});

// Equals button
equalsBtn.addEventListener("click", () => {
  try {
    display.value = eval(display.value); // evaluate the expression
  } catch {
    display.value = "Error"; // show error if invalid
  }
});
