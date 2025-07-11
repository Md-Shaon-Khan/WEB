function multiple(p1,p2){
    return p1 * p2;
}

function celToFah(cel){
    return (cel*(9/5)) + 32;
}

function ageCalculator(age){
    return 2025-age;
}


//Multiple
let result = multiple(8,9);
document.getElementById("funcDemo1").innerHTML = "The multiple of 8 and 9 is: " + result;


//Temparature
let celsius = prompt("Enter the temparature of JU(Celsius):");
// celsius = parseFloat(celsius);
let fahrenheit = celToFah(celsius).toFixed(2);
document.getElementById("celToFahren").innerHTML = "In Fahrenheit:" + fahrenheit;


//Age
let ageNow = prompt("Enter your BirthYear.");
let text1 = "My present age is " + ageCalculator(ageNow) +" Years.";
document.getElementById("yearCalDemo1").innerHTML = text1;