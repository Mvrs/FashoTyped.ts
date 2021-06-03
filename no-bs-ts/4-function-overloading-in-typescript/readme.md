## No BS TS #4 - Function Overloading in TypeScript

You can find the souce of this video on [youtube](https://youtu.be/XnyZXNnWAOA)

## [Log]

- Some JavaScript functions can be called in a variety of argument counts and types. For example, you might write a function to produce a Date that takes either a timestamp (one argument) or a month/day/year specification (three arguments).
- In TypeScript, we can specify a function that can be called in different ways by writing overload signatures. To do this, write some number of function signatures (usually two or more), followed by the body of the function:
- Find out more about overloading function on [The Official TypeScipt documentation](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads)

### Souce Code and Notes

```javascript
interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinateFromObject(obj: Coordinate): Coordinate {
  return {
    ...obj,
  };
}

function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
  return {
    x,
    y,
  };
}

function parseCoordinate(str: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
// what is unknown?
// any but you have to cast it before you use it.
// like a safe any
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  // we're doing this type check at runtime
  if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach(str => {
      const [key, value] = str.split(":");
      coord[key as "x" | "y"] = parseInt(value, 10);
    });
  } else if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

console.log(parseCoordinate(10, 20)); //{ x: 10, y: 20 }
console.log(parseCoordinate({ x: 52, y: 35 })); // { x: 52, y: 35 }
console.log(parseCoordinate("x:12,y:22")); // { x: 12, y: 22 }

```
