//Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

interface Guitarist {
  name?: string;
  active: boolean;
  album: stringOrNumberArray;
}

type userId = stringOrNumber;

// interface postId = stringOrNumber

//Literal types
let myName: 'Dave';
// myName = 'John';
let userName: 'Dave' | 'John' | 'Lotan';
userName = 'Lotan';

//functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMessage = (message: any): void => {
  console.log(message);
};

logMessage('Hello!');
logMessage(add(2, 3));
// logMessage(add('a', 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMessage(multiply(2, 2));

//optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
};

//default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMessage(addAll(2, 3, 2));
logMessage(addAll(2, 3));
logMessage(sumAll(2, 3));
logMessage(sumAll(undefined, 3));

//rest parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMessage(total(1, 2, 3, 4));

const createErr = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let num = 1;
  while (true) {
    num++;
    // if (num > 100) break; //function return 'never'
  }
};

const isNumber = (value: any): boolean => {
  return typeof value === 'number' ? true : false;
};

const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string';
  if (isNumber(value)) return 'number';
  return createErr('This should never happen!');
};
