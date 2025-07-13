//Class Inheritance
class Car{
    constructor(brand){
        this.carName = brand;
    }

    present(){
        return 'I have a ' + this.carName;
    }
}

class Model extends Car{
    constructor(brand,mod){
        super(brand);
        this.model = mod;
    }

    show(){
        return this.present() + ', it is a ' + this.model;
    }
}

const myCar = new Model("BMW","A98BX5");
document.getElementById("demo1").innerHTML = myCar.show();


//Getter & Setter Method
class Student{
    constructor(name){
        this.stuName = name;
    }

    get studentName(){
        return this.stuName;
    }

    set studentName(name){
        this.stuName = name;
    }
}

const student = new Student("Tuhin");
student.studentName = "Shaon";

document.getElementById("demo2").innerHTML = "Student name is " + student.studentName;