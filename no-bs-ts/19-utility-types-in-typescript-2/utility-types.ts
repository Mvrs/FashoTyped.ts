type Name = {
  first: string;
  last: string;
};

function addFullName(name: Name): Name & {
  fullName: string;
} {
  return {
    ...name,
    fullName: `${name.first} ${name.last}`,
  };
}

// any function will match this constraint
// this will match any function
function permuteRows<T extends (...args: any[]) => any>(
  iteratorFunc: T,
  data: Parameters<T>[0][],
): ReturnType<T>[] {
  return data.map(iteratorFunc);
}

console.log(
  permuteRows(addFullName, [
    {
      first: "marlon",
      last: "johnson",
    },
  ]),
);

class PersonWithFullName {
  constructor(public name: Name) {}

  get fullName() {
    return `${this.name.first} ${this.name.last}`;
  }
}

// this will match any constructor
// since it has the new keyword upfront
function createObjects<T extends new (...args: any[]) => any>(
  ObjectType: T,
  data: ConstructorParameters<T>[0][],
): InstanceType<T>[] {
  return data.map(item => new ObjectType(item));
}

console.log(
  createObjects(PersonWithFullName, [
    {
      first: "skip",
      last: "johnson",
    },
  ]),
);
