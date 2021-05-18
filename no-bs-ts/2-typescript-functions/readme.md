## No BS TS #2 - Typescript Functions

You can find the souce of this video on [youtube](https://youtu.be/-TsIUuA3yyE)

## [Log]

- Number one misconception of typescript TypeScript only enforce types at compile time not runtime
- `??`: optional chaining makes sure the **defined object | type** is defined before referencing it
- Run type checking would be **expensive** if TypeScript enforce types at runtime
- `?` **[null-coalescing]**: enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid

### Souce Code and Notes

```javascript
// episode 2 of no-bs-TS
// how to import and export them and how to define

function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers;

/**
 module.exports = addNumbers // TS does not like this
 * 
 */

export const addStrings = (str1: string, str2: string): string =>
  `${str1} ${str2}`;

export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

// promise function
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}

export function getName(user: { first: string, last: string }): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
}
```
