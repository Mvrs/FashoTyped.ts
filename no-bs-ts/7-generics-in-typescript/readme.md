## No BS TS #7 - Generics in TypeScript

You can find the souce of this video on [youtube](https://youtu.be/Q4QDyr0jLfo)

## [Log]

- Generics in TypeScript gives one the ability to create a component that can work over a variety of types rather than a single one
- Without Generics we would have to give a function a specific type
- Generic classes: `class SomeClass<T>{}`
- Find out more about generics in TypeScript on [The Official TypeScipt documentation](https://www.typescriptlang.org/docs/handbook/2/generics.html)

### Souce Code and Notes

```javascript
// specify there is a type
function simpleState<T>(
  initial: T, // T is replaced with whatever the inital state is
): [() => T, (v: T) => void] {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

const [state, setState] = simpleState(10);
console.log(state());
setState(62);
console.log(state());

// overriding inferred generic types
const [state2, setState2] = (simpleState < string) | (null > null);
console.log(state2());
setState2("str");
console.log(state2());

// generic interface
interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

// Best thing about TypeScript you can make anything a generic

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number,
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map(item => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map(rank => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  {
    name: "Bulbasaur",
    hp: 20,
  },
  {
    name: "Megasaur",
    hp: 5,
  },
];

const ranks = ranker(pokemon, ({ hp }) => hp);

console.log(ranks);
```
