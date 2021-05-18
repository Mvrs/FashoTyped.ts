const { getName } = require("./functions");

// console.log(
//   getName({
//     first: "a",
//     last: "b",
//   }),
// );

console.log(getName()); // will return an error
console.log(getName({ first: "a", last: "b" })); // will return an error

/**
 * run time type checking would be expensive
 *
 */
