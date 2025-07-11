const person = {
    firstName : "Shoan",
    lastname : "Khan",
    age : 21,
    eyeColor : "Black"
};

person.nationality = "Bangladeshi";


const myObj = {
    name: "John",
    age:"41",
    myCars: {
        car1: "BMW",
        car2: "Mercedies",
        car3: "Ford"
    }
};


document.getElementById("demo1").innerHTML = person.firstName + " " + person.age + " years old.";
document.getElementById("demo2").innerHTML = person["firstName"] + " " + person["lastname"] + " is " + person["age"] + " years old.";

let x = "firstName";
let y = "age";

document.getElementById("demo3").innerHTML = person[x] + " is " + person[y] + " years old.";
document.getElementById("addProDemo").innerHTML = person.firstName +"'s nationality is " + person.nationality;

delete person.nationality;
document.getElementById("deleteProDemo").innerHTML = person.firstName +"'s nationality is " + person.nationality;

document.getElementById("objInObjdemo").innerHTML = myObj.myCars.car2 + " is Mr." + myObj.name +"'s Favourite car.";