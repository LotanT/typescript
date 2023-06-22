"use strict";
// interface postId = stringOrNumber
//Literal types
let myName;
// myName = 'John';
let userName;
userName = 'Lotan';
//functions
const add = (a, b) => {
    return a + b;
};
const logMessage = (message) => {
    console.log(message);
};
logMessage('Hello!');
logMessage(add(2, 3));
// logMessage(add('a', 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
logMessage(multiply(2, 2));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMessage(addAll(2, 3, 2));
logMessage(addAll(2, 3));
logMessage(sumAll(2, 3));
logMessage(sumAll(undefined, 3));
//rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMessage(total(1, 2, 3, 4));
const createErr = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let num = 1;
    while (true) {
        num++;
        // if (num > 100) break; //function return 'never'
    }
};
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createErr('This should never happen!');
};
