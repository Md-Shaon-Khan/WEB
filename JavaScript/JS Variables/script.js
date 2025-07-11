var x = 20;
var y = 15;
var z = x + y;
document.getElementById("varDemo").innerHTML = "The value of z is: "+z;

let a = 6, b = 67, c = a + b + 1;
document.getElementById("letDemo").innerHTML = "The value of c is: "+c;

const m = 6, n = 67;

const o = m+n+5;
document.getElementById("testConst").innerHTML = "The value of o is: "+o;

// o = m+n;
// document.getElementById("constDemo").innerHTML = "The value of o is: "+o;

const father = 'Monzu';
const mother = 'Shahanaz';
const name = "Shaon";
let year = 21;
let job = "Student";

document.getElementById("strNumDemo").innerHTML = "Father's Name :" +"<b>"+ father + "</b>" + "<br>" + "Mother's name :" + mother + "<br>" + "My Name :" + name + "<br>" + "My current job :" + "<small>" + job + "</small>";

let s = "Shaon", k = 'Khan';
let sk = s + " " + k;
document.getElementById("strConcanate").innerHTML = sk;

let xx = "56",
    xy = 7;
    xz = 8;

    xyz = xx + xy + xz;
document.getElementById("strNumCon").innerHTML = xyz;