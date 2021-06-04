## No BS TS #6 - Tuples in TypeScript

You can find the souce of this video on [youtube](https://youtu.be/5q0VtzJjvNc)

## [Log]

- Tuples in TypeScript is an Array you can assign a fixed amount of elements `@length`
- **Fun Fact!** React `useState` API is modeled after a Tuple Type
- Easily access elements **@** index: `n[0], n[1], ... n[n]`
- Find out more about tuples in TypeScript on [The Official TypeScipt documentation](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)

### Souce Code and Notes

```javascript
type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinate(
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate,
): ThreeDCoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c2[2] + c2[2]];
}

console.log(add3DCoordinate([0, 0, 0], [10, 20, 30]));

// useState is similar to a tuple
function simpleStringState(
  initial: string,
): [() => string, (v: string) => void] {
  let str: string = initial;
  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
}

const [str1getter, str1setter] = simpleStringState("hello");
// to demonstrate its a unique piece of state
const [str2getter, str2setter] = simpleStringState("marlon");
console.log(str2getter()); // marlon
console.log(str1getter()); // hello
str1setter("goodbye");
console.log(str1getter()); // goodbye
console.log(str2getter()); // marlon
```
