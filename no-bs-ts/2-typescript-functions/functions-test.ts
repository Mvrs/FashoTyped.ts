import addNumbers, { addStrings, getName } from "./functions";

console.log(addNumbers(1, 2));
console.log(addStrings("a", "b"));

/**
 *  Unable to compile TypeScript:
functions-test.ts:5:21 - error TS2345: Argument of type 'string' is 
not assignable to parameter of type '{ first: string; last: string; }'.

5 console.log(getName("Marlon"));
  ~~~~~~~~
 */
console.log(getName({ first: "Marlon", last: "Johnson" }));
