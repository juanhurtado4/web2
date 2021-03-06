// Chaining Promises 

// p.then().catch()

// The two methods below each return a promise. Promises can be chained. 
// In other words a Promise can return another Promise! This might look
// like this: 

// method().then().then().then()

// If any promise in the chain is rejected it will call catch() at the 
// end of the chain. It might look like this: 

// p.then().then().then().catch()

// This function takes a name and returns a greeting + the name. 
// If name is not a string this Promise is rejected. 
function greet(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // name = 0; // <-- Somethign happened to name here. 
            if (typeof name === 'string') {
                resolve('hello ' + name);
            } else {
                reject('Name must be a string!');
            }
        }, 1233);
    });
}


// This function take in a string and returns the same string converted 
// to uppercase. If the string is not a string 
function uppercaser(str) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof str === 'string') {
                resolve(str.toUpperCase());
            } else {
                reject('Argument to uppercaser must be string');
            }
        }, 1500)
    });
}

// Here we call greet() then call uppercaser() with the results then log the results. 
// If there is an error at either method it is handled by catch() at the end of the
// chain. 

// greet("123").then((str) => {
//     // console.log('str:'+str);
//     return uppercaser(str);
//     // return uppercaser();
// }).then((str) => {
//     console.log(str);
//     return greet(str)
// }).then((str) => {
//     console.log(str);
//     return uppercaser(str)
// }).then((str) => {
//     console.log(str);
// }).catch((err) => {
//     console.log(err);
// });
/*
    // 1) What happens if greet() or uppercaser() fails? Can you make 
    // each of these fail and observe the results. 
    // 2) What happens if you call greet() on the results from 
    // uppercaser()? Test this. 
    // 3) Write a method that takes a string as input and returns 
    // the input string with a space added between each character. 
    // Call this method spacer(str). It should run async so use a
    // setTimeout() and return a Promise. 
    // 4) Last call spacer() after you call greeter() and uppercaser()

    // function uppercaser(str) {
    //     return new Promise(function (resolve, reject) {
    //         setTimeout(function () {
    //             if (typeof str === 'string') {
    //                 resolve(str.toUpperCase());
    //             } else {
    //                 reject('Argument to uppercaser must be string');
    //             }
    //         }, 1500)
    //     });
    // }
*/

function spacer(str) {
    // create new promise
    return new Promise((resolve, reject) => {
        // simulate an execution taking some time
        setTimeout(() => {
            if (typeof str === 'string') {
                // logic to add space
                resolve(str.split('').join(' '));
            } else {
                reject('Argument to add space must be string');
            }
        }, 3000)
    })
}

spacer('juan').then((str) => {
    console.log('string after spacer: ' + str)
    return uppercaser(str)
}).then((upperStr) => {
    console.log('string after upper: ' + upperStr)
}).catch((err) => {
    console.log(err)
})