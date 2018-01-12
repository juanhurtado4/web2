let http = require('http');
let url = process.argv[2];

http.get(url, response => {

    let body = '';

    response.on('data', data => {
        body += data;
    });

    response.on('end', () => {
        console.log(body.length);
        console.log(body.toString());
    });
})