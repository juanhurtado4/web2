let fs = require('fs');

let fileName = process.argv[2];

let buffer = fs.readFile(fileName, 'utf-8', (err, fileContentsBuffer) => {
    console.log(fileContentsBuffer.split('\n').length - 1)
});