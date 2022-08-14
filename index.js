//******************************Task1**********************************//

let calcRectangleArea = function (width, height) {
    try {
        if (typeof width !== 'number' || typeof height !== 'number') {
            throw Error("one of the parameters is NaN");
        } else { return width * height; }
    } catch (error) {
        console.log('error', error);
    }
};
console.log(calcRectangleArea('1', 2));



//******************************Task2**********************************//

function checkAge() {
    let user = prompt("Please enter your age");

    try {
        if (user.trim() === "") {
            throw Error('This is an empty value');
        } else if (isNaN(user)) {
            throw Error('This is an nan',);
        } else if (user < 14) {
            throw Error('You must be at least 14 y.o.');
        }
    } catch (error) {
        console.log(error.message);
    }
};

checkAge()


//******************************Task3**********************************//

class MonthException {
    constructor(message) {
        this.message = message;
        this.name = "MonthException";
    }

}
function getMonthName(month) {
    month = month - 1;
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (months[month] !== undefined) {
        return months[month];
    } else {
        throw new MonthException("Incorrect month number");
    }
}

function showMonthName(myMonth) {
    try {
        let monthName = getMonthName(myMonth);
        console.log(monthName);
    } catch (e) {
        monthName = "невідомий";
        console.log(e.message);
    }
}

showMonthName(5);
showMonthName(14);



//******************************Task4**********************************//


function showUser(id) {
    if (id < 0) {
        throw new Error('Error: ID must not be negative: ' + id)
    }
    return { 'id': id }
}

function showUsers(ids) {
    const usersArr = []
    try {
        for (let i = 0; i < ids.length; i++) {
            const userObj = showUser(ids[i])
            usersArr.push(userObj)
        }
        return usersArr
    } catch (error) {
        console.log(error.message);
    }
}

console.log(showUsers([7, -12, 44, 22]));