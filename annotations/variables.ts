let apples: number = 5;

apples = 'food';

let speed: string = 'slow';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// arrays
let colors: string[] = ['blue', 'green', 'yellow'];
let numbers: number[] = [3, 2, 1];
let truths: boolean[] = [true, true, false];

// classes
class Car {}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// when to use annotations

// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coords: { x: number; y: number } = JSON.parse(json);
console.log(coords); // {x: 10, y: 20};

// 2) When a variable is declared on one line but initialized later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // add annotation, returns any without

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable type cannot be inferred correctly

let nums = [-10, -1, 12];
let numsAboveZero: boolean | number = false; // pipe character === or for annotations

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 0) {
    numsAboveZero = nums[i];
  }
}
