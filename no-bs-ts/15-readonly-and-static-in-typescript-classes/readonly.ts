class Doggy {
  // also can declare this way
  // public readonly foo: number = 2
  constructor(public readonly name: string, public readonly age: number) {}
}
const lgg = new Doggy("LG", 13);
// lgg.name = "Foo"
console.log(lgg.name);

// A singleton implementation
class DogList {
  private doggies: Doggy[] = [];

  static instance: DogList = new DogList();

  // declare private only allows me to access its one instance: line: 23
  private constructor() {}

  // public addDog(dog: Doggy) {
  //   this.doggies.push(dog)
  // }

  static addDog(dog: Doggy) {
    DogList.instance.doggies.push(dog);
  }

  getDogs() {
    return this.doggies;
  }
}

DogList.addDog(lgg);
console.log(DogList.instance.getDogs());

// const dl = new DogList()
