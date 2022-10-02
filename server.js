const http = require('http');

http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify({ date: new Date() }));

}).listen(8000);

console.log(`Server is running on http://127.0.0.1:8000`);