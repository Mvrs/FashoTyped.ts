// a function to support a callback
export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

export type MutationFunction = (v: number) => number;

// array mutation function (contains) array of numbers
// **mutate()** nice but hard to read
// ? Better solution? Define it as a Type
export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction,
): number[] {
  return numbers.map(mutate);
}

// defines as a new mutation function qualified by MutationFunction
const myNewMutateFunc: MutationFunction = (v: number) => v * 100;

console.log(arrayMutate([1, 2, 3], v => v * 10)); // [10, 20, 30]

export type AdderFunction = (v: number) => number;

// functions returning functions
export function createAdder(num: number): AdderFunction {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55)); // 56
