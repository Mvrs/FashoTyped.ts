## No BS TS #5 - Optionals in TypeScript

You can find the souce of this video on [youtube](https://youtu.be/QvcyL_ZGhf0)

## [Log]

- Optional in TypeScript gives you the freedom to express your functions anyway you want them to be
- You can cast parameters as optional without experiencing runtime issues.
- Find out more about optionals in TypeScript on [The Official TypeScipt documentation](https://www.typescriptlang.org/docs/handbook/2/functions.html#optional-parameters)

### Souce Code and Notes

```javascript
function printIngredient(quanity: string, ingredient: string, extra?: string) {
  console.log(`${quanity} ${ingredient} ${extra ? `${extra}` : ""}`);
}

printIngredient("1C", "Flour");
printIngredient("1C", "Flour", "something more");

interface User {
  id: string;
  info?: {
    email?: string,
  };
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email;
  }

  return "";
}

function getEmailEasy(user: User): string {
  // if user exist
  // then give me info
  // if info exist
  // give me email
  return user?.info?.email ?? "";
}

// optional callbacks
function addWithCallback(x: number, y: number, callback: () => void) {
  console.log([x, y]);
  // if (callback) {
  //   callback()
  // }

  // or
  // this will only invoke this function or method(if part of a class)
  // if this function or object exist
  callback?.();
}
```
