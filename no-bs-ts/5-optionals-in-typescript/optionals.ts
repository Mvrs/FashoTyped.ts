function printIngredient(quanity: string, ingredient: string, extra?: string) {
  console.log(`${quanity} ${ingredient} ${extra ? `${extra}` : ""}`);
}

printIngredient("1C", "Flour");
printIngredient("1C", "Flour", "something more");

interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  if (user.info) {
    // return user.info.email;
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
