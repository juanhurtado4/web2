let fs = require('fs');

let fileName = process.argv[2];
let extension = '.' + process.argv[3];

let fileContent = fs.readdir(fileName, (err, files) => {
    if (err) {
        return console.log('Error');
    }
    let filteredFiles = files.filter((file) => {
        return file.includes(extension);
    })

    for (file of filteredFiles) {
        console.log(file);
    }
})