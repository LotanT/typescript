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
let bands: string[] = [];
bands.push('Van Halen');

//Tuple
let myTuple: [string, number, boolean] = ['Lotan', 30, true];

let mixed = ['John', 1, false];

mixed = myTuple;
// myTuple = mixed
// myTuple[3] = 42
myTuple[1] = 42;

//Object
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: 'Lotan',
  prop2: true,
};

exampleObj.prop1 = 'John';

interface Guitarist {
  name?: string;
  active: boolean;
  album: (string | number)[];
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  album: [1984, 5150, 'OU812'],
};

let jp: Guitarist = {
  name: 'Jimmy',
  active: false,
  album: ['I', 'IV', 'II'],
};

evh = jp;
// evh.years = 40;
jp.active = false;

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`;
  }
  return 'Hello!';
};

console.log(greetGuitarist(jp));

//Enums
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
