const http = require('http');
const os = require('os');

const { personalmodule, currentDate } = require('./personalmodule.js');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const user = os.userInfo().username;

    res.write(`Data of request: ${currentDate}<br/>`);
    res.write(personalmodule(user));

    res.end()
}).listen(8000);

console.log(`Server is running on http://127.0.0.1:8000`);