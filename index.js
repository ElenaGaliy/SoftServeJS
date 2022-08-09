// ==//=//==Task1

let num = [2, 3, 4, 5];

for (let j = 0; j < num.length; j += 1) {
    num[j] *= num[j];
    console.log(num[j]);
};

let numbers = [2, 3, 4, 5];

let i = 0;
while (i < numbers.length) {
    console.log(numbers[i] * numbers[i]);
    i += 1;
};

// ==//=//==Task2


for (let index = 0; index <= 15; index += 1) {
    if (index % 2 == 0)
        console.log([index], "is even");
    else if (index % 2 == 1)
        console.log([index], "is odd");
};

//==//=//==Task3==//==//

function getRandNumber(max = 1, min = 500) {
    const k = Math.random() * (max - min) + min;
    return Math.floor(k)
};

function randArray(length) {
    const arr = []
    for (let i = 0; i < length; i += 1) {
        const randomNumber = getRandNumber()
        arr.push(randomNumber)
    };
    return arr
};


const randomArray = randArray(5)
console.log('randomArray', randomArray);

//==//=//==Task4==//==//


function ToDegree(a, b) {
    return b ? a * ToDegree(a, b - 1) : 1;
}
console.log("результат:", ToDegree(3, 4));



console.log(Math.pow(3, 4));



//==//=//==Task5==//==//

function findMin() {
    return Math.min(...findMin.arguments)
}

console.log(findMin(12, 14, 4, -4, 0.2));



//==//=//==Task6==//==//

function findUnique(arr) {
    const uniqueVal = {}

    for (let i = 0; i < arr.length; i++) {
        let currentValue = arr[i]
        if (uniqueVal[currentValue]) {
            return false
        } else {
            uniqueVal[currentValue] = currentValue
        }
    }
    return true
}
console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));


// //==//=//==Task7==//==//


function lastElem(arr, slicer = 1) {
    return arr.slice(-slicer)
};

console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5], 2));
console.log(lastElem([3, 4, 10, -5], 8));



//==//=//==Task8==//==//

function toUpper(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(function (word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
}

console.log(toUpper("i love java script"))