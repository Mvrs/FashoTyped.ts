// const beforeLoad = "beforeLoad";
// const loading = "loading"
// const loaded = "loaded"

enum LoadingState {
  beforeLoad = "beforeLoad",
  loading = "loading",
  loaded = "loaded",
}

// define a key
const englishLoadingStates = {
  [LoadingState.beforeLoad]: "Before Load",
};

const isLoading = (state: string) => state === LoadingState.loaded;

console.log(isLoading(LoadingState.beforeLoad));

// Literal Types

function rollDice(dice: 1 | 2 | 3): number {
  let pip = 0;
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5) + 1;
  }
  return pip;
}
console.log(rollDice(3));

// functional overloads and
// string literal
function sendEvent(name: "addToCart", data: { productId: number }): void;
function sendEvent(name: "checkout", data: { cartCount: number }): void;
function sendEvent(name: string, data: unknown): void {
  console.log(`${name}: ${JSON.stringify(data)}`);
}

// this will match whatever the particular literally for
// name. example: line 34.
// if it equates then it will get the correct signature for you.
sendEvent("addToCart", { productId: 240 });
