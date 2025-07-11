let x, y, z;

x = 5;
y = 6;

z = x+y;

document.getElementById("demo").innerHTML = "The value of z is "+z+".";
document.getElementById("helloJs").innerHTML = z;

function myButton1(){
    document.getElementById("buttonId1").innerHTML = "Hello paragraph from button";
    document.getElementById("buttonId2").innerHTML = "All good?";
}