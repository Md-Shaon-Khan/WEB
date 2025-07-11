try{
    const PI = 3.1416;
    PI = 3.14;
}
catch(err){
    document.getElementById("constDemo1").innerHTML = err;
}

const cars = ["Saab","Volvo","BMW"];
cars[0] = "Toyota";
cars.push("Audi");

document.getElementById("demoArrayCar").innerHTML = cars;

try{
    const name = ["shaon","raunaq","kuasha"];
    name = ["shaon","kuasha","raunaq"];
}catch(err){
    document.getElementById("tryResignArray").innerHTML = err;
}

try{
    const car = {
        type:"Fiat",
        model:"500",
        color:"White",
        price:3400000      
    }
    car.color = "Red";
    car.owner = "Shaon";

    document.getElementById("constObj").innerHTML = JSON.stringify(car,null,4);
}catch(err){
    document.getElementById("constObj").innerHTML = err;
}

try{
    const Student = {
        name:"Shaon",
        age:21,
        session:"2022-2023"     
    }
    Student = {
        name:"Shaon",
        age:22,
        session:"2022-2023" 
    }

    document.getElementById("constObj").innerHTML = JSON.stringify(Student,null,2);
}catch(err){
    document.getElementById("constObj").innerHTML = err;
}