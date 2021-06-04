## No BS TS #8 - Generics with keyof in TypeScript

You can find the souce of this video on [youtube](https://youtu.be/4XTj6sIGTdc)

## [Log]

- The `keyof` operator takes an object type and produces a string or numeric literal union of its keys:
  ```
  type Point = { x: number; y: number };
  type P = keyof Point;
  ```
- If the type has a string or number index signature, `keyof` will return those types instead:

  ```
  type Arrayish = { [n: number]: unknown };
  type A = keyof Arrayish;

  type A = number

  type Mapish = { [k: string]: boolean };
  type M = keyof Mapish;

  type M = string | number
  ```

- Find out more about keyofin TypeScript on [The Official TypeScipt documentation](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#the-keyof-type-operator)

### Souce Code and Notes

```javascript
function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType,
): DataType[KeyType][] {
  return items.map(item => item[key]);
}

const dogs = [
  { name: "Mimi", age: 12 },
  { name: "LG", age: 13 },
];

console.log(pluck(dogs, "age"));
console.log(pluck(dogs, "name"));

// creating an event type

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name],
): void {
  console.log([name, data]);
}

sendEvent("addToCart", {
  productID: "foo",
  user: "baz",
  quantity: 1,
  time: 10,
});

sendEvent("checkout", { user: "mars", time: 20 });

```
