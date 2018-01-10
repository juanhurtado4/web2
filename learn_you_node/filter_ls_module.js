module.exports = function filterByExt(dirName, ext, callback){
    // module to read files
    let fs = require('fs');
    // module to manipulate file / folder paths
    let path = require('path');

    fs.readdir(dirName, (err, files) => {
        if (err) {
            return callback(err, null);
        }
        // filter file based on extension
        let filteredFiles = files.filter(file => {
            // get file extension without the '.'
            let fileExt = path.extname(file).slice(1);
            return fileExt === ext
        });

        return callback(null, filteredFiles);
    })
}