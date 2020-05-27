const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (c: number, d: number): number => {
  return c - d;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiple = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  //never is used when we expect a function to never return anything
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

// destructuring, destructure first, then annotate
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(forecast);
