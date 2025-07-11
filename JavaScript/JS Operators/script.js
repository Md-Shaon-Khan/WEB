let text1 = "A";
let text2 = "B";

let result1 = text1 < text2;
document.getElementById("conDemo1").innerHTML = "Is A is less than B: " + result1;

let text3 = "20";
let text4 = "5";

document.getElementById("conStrDemo2").innerHTML = "Is 20 less than 5 is String? " + (text3<text4);

let text5 = "5";
let text6 = 5;
let result2;
if(text5==text6){
     result2 = (text5==text6);
}
else{
     result2 = (text5==text6);
}

document.getElementById("equalDemo3").innerHTML = "Number 5 and String '5' is (==):" + result2;

let result3;
if(text5===text6){
     result3 = (text5===text6);
}
else{
     result3 = (text5===text6);
}

document.getElementById("equalDemo4").innerHTML = "Number 5 and String '5' is (===):" + result3;
