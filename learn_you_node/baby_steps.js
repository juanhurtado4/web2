let strNumbersArr = process.argv.slice(2)

let sum = strNumbersArr.reduce((accu, currVal) => {
    return parseInt(accu) + parseInt(currVal)
});

console.log(sum);