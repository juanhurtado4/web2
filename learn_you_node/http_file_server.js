let http = require('http');
let fs = require('fs');
const portNumber = process.argv[2];
const file = process.argv[3];

http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    fs.createReadStream(file).pipe(res);
}).listen(portNumber);