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
