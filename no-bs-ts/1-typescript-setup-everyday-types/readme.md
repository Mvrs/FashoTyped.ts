## No BS TS #1 - Typescript Setup & Everyday Types

You can find the souce of this video on [youtube](https://youtu.be/LKVHFHJsiO0)

## Log

- Sometimes it's best **at times** to allow TypeScript to infer types
- `Record<K, T>`: allows you to explicity infer your object type
- `Interface <name>`: great for wrapping your value type for inheriting properites or delegate strictness.

### Souce Code and Notes

```javascript
let userName: string = "Marlon";
let hasLoggedIn: boolean = true;

userName += " Johnson";

console.log(userName);

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

const names: string[] = userName.split(" ");

// another way to declare an array
const myValues: Array<number> = [1, 2, 3]; // a tuple will allow to do this

// better solution for typing objects are Interfaces
interface Person {
  first: string;
  last: string;
}

// typing objects
// not something you want to use all over the place
const myPerson: Person = {
  first: "Marlon",
  last: "Johnson",
};

// Record is defined as Record<K, T>
const ids: Record<number, string> = {
  10: "a",
  20: "b",
};
ids[30] = "c";

// if (ids[30] === 20) { // ts warning

// }

// example of what not to do
// a lil overkill
// allow typescript to infer it
for (let i: number = 0; i < 10; i++) {
  console.log(i);
}

[1, 2, 3].forEach(w => console.log(w));
const out = [4, 5, 6].map(v => v * 10);
```
