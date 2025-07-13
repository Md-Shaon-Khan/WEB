const element = document.getElementById("intro");
document.getElementById("demo1").innerHTML = "The text from the intro paragraph is:" + "<b>" + element.innerHTML + "</b>";

const element2 = document.getElementsByTagName("h3");
document.getElementById("demo2").innerHTML = element2[1].innerHTML;

document.getElementById("demo3").innerHTML = "New Text!";

document.getElementById("myTea").src = "cycleBishmail.jpg";

document.getElementById("demo4").style.color = "green";
document.getElementById("demo4").style.fontFamily = "arial";
document.getElementById("demo4").style.fontSize = "40px";


document.getElementById("myButton").addEventListener("click",function(){
    document.getElementById("demo6").style.color = "red";
});


document.getElementById("demo7").addEventListener("click",function() {
    this.innerHTML = "Ooops Changed!";
});

function changedTexth3(){
    document.getElementById("demo8").innerHTML = Date();
}


const classElements = document.getElementsByClassName("myClass");
document.getElementById("demo9").innerHTML = classElements[0].innerHTML + " | " + classElements[1].innerHTML;


const firstMatch = document.querySelector(".selectorExample");
document.getElementById("demo10").innerHTML = "First match: " + firstMatch.innerHTML;


const allMatches = document.querySelectorAll(".selectorExample");
let result = "";
for(let i=0;i<allMatches.length;i++){
    result += allMatches[i].innerHTML + "<br>";
}

document.getElementById("demo11").innerHTML = result;

function removeElement(){
    const target = document.getElementById("removeEle");
    target.remove();
}

function toggleColor() {
  const para = document.getElementById("togglePara");
  para.classList.toggle("highlight");
}
