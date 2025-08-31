// Select theme button
const themeBtn = document.getElementById("theme-btn");

// Toggle Dark Mode
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode"); // add/remove dark-mode class

  // Change button text based on mode
  if (document.body.classList.contains("dark-mode")) {
    themeBtn.textContent = "☀️ Light Mode";
  } else {
    themeBtn.textContent = "🌙 Dark Mode";
  }
});

// Form Validation
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop actual form submission

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (name === "" || email === "" || message === "") {
    alert("⚠️ Please fill in all fields before submitting.");
  } else {
    alert("✅ Thank you, " + name + "! Your message has been sent.");
    form.reset(); // clear the form
  }
});
