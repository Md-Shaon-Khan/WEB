function calculateSum() {
  // Get input value by ID
  let input = document.getElementById("numbers").value;

  // Split input into an array (by comma)
  let nums = input.split(",");

  let sum = 0;

  // Loop through all numbers and calculate sum
  for (let i = 0; i < nums.length; i++) {
    sum += parseFloat(nums[i]);  // convert string to number
  }

  // Show result inside result <h3>
  document.getElementById("result").innerText = "Total Sum: " + sum;
}
