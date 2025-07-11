const car ={
    type:"Toyota",
    model:"5A1c98",
    color:"Black"
};

const Student = {
    name:"Shaon",
    age :21,
    subject:"IIT"
};

const person = {

};
person.firstName = prompt("Enter your first name:");
person.lastName  = prompt("Enter your last name: ");
person.age = prompt("Enter your age:");


const animal = new Object();
animal.d = "Dog";
animal.c = "Cat";
animal.t = "Tiger";

const person2 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

//car 
document.getElementById("demo1").innerHTML = "The car type is: " + JSON.stringify(car);
document.getElementById("demoType1").innerHTML = "Car Type: " + car.type;

//Student
document.getElementById("stuDemo1").innerHTML = Student.name + " is " + Student.age + " years old.Who is studies at " + Student.subject;

// person
let person_details = "Users name is " + person.firstName + " " + person.lastName + " and his/her age is " + person.age;
document.getElementById("emptyDemo1").innerHTML = person_details;

//Animal
document.getElementById("emptyDemo2").innerHTML = JSON.stringify(animal);

//Person2
document.getElementById("demo2").innerHTML = person2.fullName();