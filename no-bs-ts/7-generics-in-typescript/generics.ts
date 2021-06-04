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
const [state2, setState2] = simpleState<string | null>(null);
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
