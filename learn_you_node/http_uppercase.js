let http = require('http');
let portNumber = process.argv[2]
var map = require('through2-map');

http.createServer(function (req, res) {
    if (req.method === 'POST') {
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
}
}).listen(portNumber);