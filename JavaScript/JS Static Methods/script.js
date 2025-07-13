class Car{
    constructor(name){
        this.name = name;
    }

    static hello(obj){
        return obj.name;
    }
}

const myCar = new Car("Mercedes");
document.getElementById("demo1").innerHTML = Car.hello(myCar);