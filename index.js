//******************************Task1******************************************************//

function upperCase(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        console.log("String's starts with uppercase character");
    } else {
        console.log("String's not starts with uppercase character");
    }
} upperCase('regexp');
upperCase('RegExp');



//******************************Task2******************************************************//

function checkEmail(email) {
    if (email.match(/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm)) {
        return true;
    }
};

console.log(checkEmail("Qmail2@gmail.com"));


//******************************Task3******************************************************//


const myRe = /d(b+)(d)/i;
const myArray = myRe.exec("cdbBdbsbz");

console.log(myArray);


//******************************Task4******************************************************//

const str = 'Java Script';
const result = str.replace(/(\w+) (\w+)/, '$2, $1');
console.log(result);


//******************************Task5******************************************************//


let input = document.querySelector("#bank-card-input"),
    numbers = /[0-9]/,
    regExp = /[0-9]{4}/

input.addEventListener("input", (ev) => {
    if (ev.inputType === "insertText" && !numbers.test(ev.data) || input.value.length > 19) {
        input.value = input.value.slice(0, input.value.length - 1)
        return
    }

    let value = input.value
    if (ev.inputType === "deleteContentBackward" && regExp.test(value.slice(-4))) {
        input.value = input.value.slice(0, input.value.length - 1)
        return
    };

    if (regExp.test(value.slice(-4)) && value.length < 19) {
        input.value += " "
    }
});


//******************************Task6******************************************************//

function checkEmail(email) {
    if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        return 'Email is correct!'
    } else {
        return 'Email is not correct!'
    }
}

console.log(checkEmail('my_mail@gmail.com'));

console.log(checkEmail('#my_mail@gmail.com'));

console.log(checkEmail('my_ma--il@gmail.com'));


//******************************Task7******************************************************//

function checkLogin(data) {
    const par = /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
    const parNumber = /[0-9\.]+/g;
    const resNumber = data.match(parNumber);
    const result = par.test(data);
    console.log(`${data} is ${result} -${parNumber}`);
};

checkLogin('ee1*1ret3');
checkLogin('ee1.1ret3');
checkLogin('hddkj_567');
checkLogin('chiz22009');