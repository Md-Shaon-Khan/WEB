let inputSen = prompt("Enter any Sentences: ");
let count = 0;

for (let a = 0; a < inputSen.length; a++) {
    if ( inputSen[a] == 'A' || inputSen[a] == 'a' || inputSen[a] == 'E' || inputSen[a] == 'e' || inputSen[a] == 'I' || inputSen[a] == 'i' || inputSen[a] == 'O' || inputSen[a] == 'o' ||  inputSen[a] == 'U' || inputSen[a] == 'u') {
        count += 1;
    }
}

let outputSen = "Vowels is the sentence " + count;
document.getElementById("demo1").innerHTML = inputSen;
document.getElementById("demo2").innerHTML = outputSen;

