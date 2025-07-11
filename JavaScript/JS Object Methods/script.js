const person = {
    firstName: "John",
    lastName: "Khan",
    id: 1984,
    main1: "ds",
    main2: "dc",
    fullName: function(){
        return person.firstName + " " + person.lastName;
    }
};

person.mainSubject = function(){
    return (this.main1 + " " + this.main2).toUpperCase();
}


document.getElementById("demo").innerHTML = person.fullName();
document.getElementById("demo2").innerHTML = person.fullName;
document.getElementById("demo3").innerHTML = person.mainSubject();