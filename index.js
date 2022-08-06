// ============== Task1 ==============

let x = 1;
let y = 2;
let res1 = "1" + 2;
console.log(res1);
console.log(typeof res1);


let res2 = "true" + "2"
console.log(res2);
console.log(typeof res2);


let res3 = x < y;
console.log(res3);
console.log(typeof res3);

let res4 = "x" / 2;
console.log(res4);
console.log(typeof res4);


// ============== Task2 ==============

let num = prompt();
if (num % 7 === 0) {

    console.log('кратне 7');
} else if (num % 2 === 0) {

    console.log('парне додатне');
};


// ============== Task3 ==============

let arr = [5, "smile", 3 > 4, null];

console.log(arr);

prompt("Введіть будь-яке значення")

let arr1 = [5, "smile", 3 > 4, null, " ", 8];

console.log(arr1[5]);

arr.shift();
console.log(arr);



// ============== Task4 ==============

let cities = ["Rome", "Lviv", "Warsaw"];
cities = "Rome" + "*" + "Lviv" + "*" + "Warsaw";
console.log(String(cities));


// ============== Task5 ==============


let isAdult = prompt("Вам є 18 років?");

if (isAdult > 18) {
    alert("Ви досягли повнолітнього віку");
} else if (isAdult < 18); {
    alert("Ви ще надто молоді");
};


// ============== Task6 ==============

let trian1 = prompt();
let trian2 = prompt();
let trian3 = prompt();

const halfP = (Number(trian1) + Number(trian2) + Number(trian3)) / 2;
const mul1 = halfP - trian1;
const mul2 = halfP - trian2;
const mul3 = halfP - trian3;

const trSquare = Math.sqrt(halfP * mul1 * mul2 * mul3);
console.log('halfP', halfP);
console.log('mul1 * mul2 * mul3', mul1 * mul2 * mul3);
console.log('trSquare', trSquare);


// ============== Task7 ==============

let time = new Date().getHours();

let message;

if (time > 23 || time < 5) {
    message = "Доброї ночі";
}
else if (time >= 5 && time < 11) {
    message = "Доброго ранку";
} else if (time >= 11 && time < 17) {
    message = "Доброго дня";
} else if (time >= 17 && time < 23) {
    message = "Доброго вечора";
};

switch (true) {
    case (time > 23 || time < 5):
        console.log("Доброї ночі", time > 23);
        break;
    case (time >= 5 && time < 11):
        console.log("Доброго ранку", time > 5);
        break;
    case (time >= 11 && time < 17):
        console.log("Доброго дня", time > 11);
        break;
    case (time >= 17 && time < 23):
        console.log("Доброго вечора", time > 17);
        break;
};


