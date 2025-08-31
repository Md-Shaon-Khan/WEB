let inputSen = prompt("Enter any Sentences: ");
let count = 0;

for (let a = 0; a < inputSen.length; a++) {
    if ( inputSen[a] == 'A' || inputSen[a] == 'a' || inputSen[a] == 'E' || inputSen[a] == 'e' || inputSen[a] == 'I' || inputSen[a] == 'i' || inputSen[a] == 'O' || inputSen[a] == 'o' ||  inputSen[a] == 'U' || inputSen[a] == 'u') {
        count += 1;
    }
}

let outputSen = "There are " + count + " vowels in the sentence.";
document.getElementById("input1").innerHTML = inputSen;
document.getElementById("output1").innerHTML = outputSen;

