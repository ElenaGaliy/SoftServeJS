// ******************************Task1******************************************************//

const http = require('http');
const os = require('os');
const path = require('path');
const host = 'localhost';
const port = 8080;


const server = http.createServer((req, res) => {

    res.writeHead(200);
    res.end(`
        <div>OS type - ${os.type()}</div>
        <div>system work time - ${os.uptime() / 60}</div>
        <div>current user name - ${os.userInfo().username}</div>
        <div>current work directory - ${__dirname}</div>
        <div>server file name - ${path.basename(__filename)}</div>
    `)

});

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})