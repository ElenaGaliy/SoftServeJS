//******************************Task1******************************************************//

function propsCount(currentObject) {
    let count = 0
    for (let properties in currentObject) {
        count = count + 1
    }
    return count
};
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
}


console.log(propsCount(mentor));


//******************************Task2******************************************************//

let obj =
{
    name: "Barry",
    color: "grey",
    legs: 4,
    age: 7,
    breed: "british cat",
};

function showProps(obj) {
    return Object.keys(obj)
}

function showValues(obj) {
    return Object.values(obj)
}

console.log(showProps(obj));
console.log(showValues(obj));



//*********************************Task3*****************************************************//

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return this.name + this.surname
    }
};


class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);

        this.year = year;

    }
    showFullName(midleName) {
        return this.name + ' ' + this.surname + ' ' + midleName
    }

    showCourse() {

        const diffPeriod = new Date().getTime() - new Date(this.year + '.09.01').getTime()
        const periodInYears = parseInt((diffPeriod) / (1000 * 60 * 60 * 24) / 365, 10)
        return periodInYears
    }
}

const stud1 = new Student("Petro", "Petrenko", 2015);

console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());


//******************************Task4*******************************************************//


class Worker {
    static workerList = [];
    #experience = 1.2
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;

        Worker.workerList.push(this);
    };

    set setExp(experience) { this.#experience = experience }
    get getExp() { return this.#experience }

    static getSortedSalary() {
        return Worker.workerList.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience())
            .reduce((prev, cur) => prev += cur.fullName + ' ' + cur.showSalaryWithExperience() + '\n', '')
    }

    showSalary() { return this.dayRate * this.workingDays }
    showSalaryWithExperience() {
        return this.showSalary() * this.#experience
    };
};

let worker1 = new Worker("John Johnson", 20, 23);
worker1.setExp = 100;
let worker2 = new Worker("Tom Tomson", 48, 22);
let worker3 = new Worker("Andy Ander", 29, 23);

// console.log(worker1);
// console.log(worker1.fullName);
// worker1.setExp = 1.5;
// console.log('showSalary', worker1.showSalary());
// console.log('showSalaryWithExperience', worker1.showSalaryWithExperience());

// console.log('worker1.getExp', worker1.getExp);

console.log(Worker.getSortedSalary());
console.log(worker1.showSalaryWithExperience());



//******************************Task5******************************************************//

class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(base, height) {
        super()
        this.base = base
        this.height = height
    }
    getArea() { return 1 / 2 * this.base * this.height }
}

class Square extends GeometricFigure {
    constructor(width) {
        super()
        this.width = width
    }
    getArea() {
        return this.width * this.width
    }
}

class Circle extends GeometricFigure {
    constructor(radius) {
        super()
        this.radius = radius
    }
    getArea() {
        return 3.14 * Math.pow(this.radius, 2)
    }
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
const getFigureProperty = function handleFigures(figures) {
    return figures.reduce((prev, cur) => prev += 'Geometric figure: ' + cur.toString() + ' - area: ' + cur.getArea() + '\n', '')
}
console.log(getFigureProperty(figures));