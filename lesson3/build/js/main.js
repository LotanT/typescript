"use strict";
let stringArr = ['one', 'hey', 'Lotan'];
let guitars = ['Stars', 'Les Paul', 5150];
let mixedData = ['EVH', 1948, true];
stringArr[0] = 'John';
stringArr.push('Hi');
guitars[0] = 1948;
guitars.unshift('Jim');
// stringArr = guitars
// guitars = stringArr;
// guitars = mixedData;
// mixedData = guitars;
let test = [];
let bands = [];
bands.push('Van Halen');
//Tuple
let myTuple = ['Lotan', 30, true];
let mixed = ['John', 1, false];
mixed = myTuple;
// myTuple = mixed
// myTuple[3] = 42
myTuple[1] = 42;
//Object
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Lotan',
    prop2: true,
};
exampleObj.prop1 = 'John';
let evh = {
    name: 'Eddie',
    active: false,
    album: [1984, 5150, 'OU812'],
};
let jp = {
    name: 'Jimmy',
    active: false,
    album: ['I', 'IV', 'II'],
};
evh = jp;
// evh.years = 40;
jp.active = false;
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
