// Define the object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York"
};

// Method 1: Accessing properties directly
document.getElementById("demo1").innerHTML = "Direct access: " + person.firstName + " " + person.lastName;

// Method 2: Using a for...in loop
let output = "";
for (let key in person) {
    output += key + ": " + person[key] + "<br>";
}
document.getElementById("demo2").innerHTML = "Using for...in loop:<br>" + output;

// Method 3: Using Object.values()
const values = Object.values(person);
document.getElementById("demo3").innerHTML = "Using Object.values():<br>" + values.join(", ");

// Method 4: Using JSON.stringify()
const jsonString = JSON.stringify(person);
document.getElementById("demo4").innerHTML = "Using JSON.stringify():<br>" + jsonString;

// Method 5: Displaying as an HTML table
let table = "<table border='1' cellspacing='0' cellpadding='5'>";
for (let key in person) {
    table += "<tr><td>" + key + "</td><td>" + person[key] + "</td></tr>";
}
table += "</table>";
document.getElementById("demo5").innerHTML = "Displayed as table:<br>" + table;
