let fs = require('fs');

let fileName = process.argv[2];

let buffer = fs.readFileSync(fileName);

let fileContent = buffer.toString();

let filelines = fileContent.split('\n');

console.log(filelines.length - 1);