let portNumber = process.argv[2];
let net = require('net')
let server = net.createServer(function (socket) {

})
server.listen(portNumber)