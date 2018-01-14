let http = require('http');
let urls = process.argv.slice(2);
let results = Array(urls.length)

// TODO: Abstract repeated for loop
function get_data(urlInd) {
    let url = urls[urlInd];
    http.get(url, response => {
        response.setEncoding('utf8')
        let body = '';
        
        response.on('data', data => {
            body += data;
        });
        
        response.on('end', () => {
            results[urlInd] = body;
            let finishedCount = 0;
            for (let i = 0; i < results.length; i++) {
                if (results[i] !== undefined) finishedCount++
            }
            if (finishedCount === results.length) {
                for (let j = 0; j < results.length; j++) console.log(results[j])
            }
        });
    })
}

for (let urlInd = 0; urlInd < urls.length; urlInd++) {
    get_data(urlInd);
}