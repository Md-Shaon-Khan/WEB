const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent page reload

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Basic validation
  if (name === "" || email === "") {
    errorMsg.textContent = "Name and email are required!";
    successMsg.textContent = "";
    return;
  }

  // Validate email format using regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    errorMsg.textContent = "Invalid email format!";
    successMsg.textContent = "";
    return;
  }

  // Success
  successMsg.textContent = `Thank you, ${name}! Your message has been received.`;
  errorMsg.textContent = "";

  // Reset form
  form.reset();
});
