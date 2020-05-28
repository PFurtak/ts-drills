const carMakers = ['mazda', 'ford', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake = [['rx-7'], ['focus rs'], ['corvette']];

// inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevents imcompatible values
carMakers.push(100);

// map and reduce
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates = [new Date(), '2020-05-27'];
