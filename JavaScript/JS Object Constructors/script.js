function Person( first, last, age, eye ) {
     this.firstName = first;
     this.lastName = last;
     this.age = age;
     this.eyeColor = eye;

     this.fullName = function(){
        return this.firstName + " " + this.lastName;
     };
}

Person.prototype.changeN = function(name){
    this.firstName = name;
}

const myFather = new Person("Monzur Rahman","Khan",45,"Black");
const myMother = new Person("Shahanaz","Khan",37,"Black");


//Demo1
document.getElementById("consDemo1").innerHTML = JSON.stringify(myFather);


//Demo2
let output = "";
for(let key in myFather){
    if (typeof myFather[key] !== "function") {
        output += key + " : " + myFather[key] + "<br>";
    }
}
output += "fullName : " + myFather.fullName();
document.getElementById("consDemo2").innerHTML = output;



//Demo3
let output1 = "";
for(let key in myMother){
    output1 += key + " : " + myMother[key] + "<br>";
}
document.getElementById("consDemo3").innerHTML = output1;


//Add nationality outside the constructor
myFather.homeVillage = "Gazutia";
myMother.homeVillage = "Larugram";

//newProOutConsDemo4
document.getElementById("newProOutConsDemo4").innerHTML = "My father's village is " + myFather.homeVillage + " & my mother's is " + myMother.homeVillage;


//Add a new Property
Person.prototype.nationality = "Bangladeshi";
document.getElementById("proConsDemo5").innerHTML = JSON.stringify(myFather) + myFather.nationality;
document.getElementById("proConsDemo6").innerHTML = myMother.fullName();

myFather.changeN("Monzu");
document.getElementById("chaProConsDemo7").innerHTML = "Changed name is " + myFather.fullName();