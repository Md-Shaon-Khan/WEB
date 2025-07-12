const str = "Hello, JavaScript!";
const base = "Hello";
const str2 = " World";

let content = `
  <ul class="list-group">

    <li class="list-group-item"><strong>length:</strong> ${str.length}</li>
    <li class="list-group-item"><strong>charAt(1):</strong> ${str.charAt(1)}</li>
    <li class="list-group-item"><strong>charCodeAt(1):</strong> ${str.charCodeAt(1)}</li>
    <li class="list-group-item"><strong>codePointAt(1):</strong> ${str.codePointAt(1)}</li>
    <li class="list-group-item"><strong>concat(" World"):</strong> ${base.concat(str2)}</li>
    <li class="list-group-item"><strong>at(1):</strong> ${str.at(1)}</li>
    <li class="list-group-item"><strong>str[1]:</strong> ${str[1]}</li>
    <li class="list-group-item"><strong>slice(0,5):</strong> ${str.slice(0, 5)}</li>
    <li class="list-group-item"><strong>substring(0,5):</strong> ${str.substring(0, 5)}</li>
    <li class="list-group-item"><strong>substr(0,5):</strong> ${str.substr(0, 5)}</li>
    <li class="list-group-item"><strong>toUpperCase():</strong> ${str.toUpperCase()}</li>
    <li class="list-group-item"><strong>toLowerCase():</strong> ${str.toLowerCase()}</li>
    <li class="list-group-item"><strong>isWellFormed():</strong> ${str.isWellFormed()}</li>
    <li class="list-group-item"><strong>toWellFormed():</strong> ${str.toWellFormed()}</li>
    <li class="list-group-item"><strong>trim():</strong> ${"   Trim Me   ".trim()}</li>
    <li class="list-group-item"><strong>trimStart():</strong> ${"   Trim Start".trimStart()}</li>
    <li class="list-group-item"><strong>trimEnd():</strong> ${"Trim End   ".trimEnd()}</li>
    <li class="list-group-item"><strong>padStart(10, "*"):</strong> ${"7".padStart(10, "*")}</li>
    <li class="list-group-item"><strong>padEnd(10, "*"):</strong> ${"7".padEnd(10, "*")}</li>
    <li class="list-group-item"><strong>repeat(3):</strong> ${"Hi ".repeat(3)}</li>
    <li class="list-group-item"><strong>replace("JavaScript", "World"):</strong> ${str.replace("JavaScript", "World")}</li>
    <li class="list-group-item"><strong>replaceAll("l", "*"):</strong> ${str.replaceAll("l", "*")}</li>
    <li class="list-group-item"><strong>split(" "):</strong> ${str.split(" ")}</li>

  </ul>
`;

document.getElementById("output").innerHTML = content;
