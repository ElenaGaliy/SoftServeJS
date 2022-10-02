//******************************Task2******************************************************//

const currentDate = new Date();
module.exports.currentDate = currentDate;
module.exports.personalmodule = function (userName) {
    const hour = currentDate.getHours();

    switch (true) {
        case hour >= 5 && hour < 11:
            return `Good morning, ${userName}`;
        case hour >= 11 && hour < 17:
            return `Good day, ${userName}`;
        case hour >= 17 && hour < 23:
            return `Good evening, ${userName}`;
        case hour >= 23 || hour < 5:
            return `Good night, ${userName}`;
    }
}