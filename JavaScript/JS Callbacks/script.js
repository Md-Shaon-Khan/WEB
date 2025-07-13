function myDisplayer(some){
    document.getElementById("demo1").innerHTML = some;
}

function myFirst(){
    myDisplayer("Hello");
}

function mySeond(){
    myDisplayer("GoodBye");
}


mySeond();
myFirst();

function myDisplayer2(something){
    document.getElementById("demo2").innerHTML = something;
}

function myCalculator(num1,num2,myCallBack){
    let sum = num1 + num2;
    myCallBack(sum);
}

myCalculator(12,13,myDisplayer2);