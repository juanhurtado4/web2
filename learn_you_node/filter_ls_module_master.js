let filterByExt = require('./filter_ls_module');

let folderName = process.argv[2];
let ext = process.argv[3];

filterByExt(folderName, ext, (err, files) => {
    if (err) {
        return console.log(err)
    }
    files.forEach(file => {
        console.log(file);
    });
})
