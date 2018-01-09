let strNumbersArr = process.argv.slice(2)

let numberArr = strNumbersArr.map(stringNum => parseInt(stringNum));

let sum = numberArr.reduce((accumulator, currentVal) => accumulator + currentVal);

console.log(sum);