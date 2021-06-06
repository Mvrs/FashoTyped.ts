// create a noSQL style simple in memory database
// and build on top of that

interface Database<T> {
  get(id: K): T;
  set(id: K, value: T): void;
}

// persitable inteface
// means you can read and write your state from a string
interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

type DBKeyType = string | number | symbol;

// generic key type
class InMemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>;
  get(id: K): T {
    return this.db[id];
  }
  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDB<T, K extends DBKeyType>
  extends InMemoryDatabase<T, K>
  implements Persistable
{
  saveToString(): string {
    // for this to work we would need to change the db to protected
    // so that it becomes a descendent as it extends InMemoryDatabase
    return JSON.stringify(this.db); // this.db throws an error because its private
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDB = new PersistentMemoryDB<number, string>();
myDB.set("foo", 22);
// or
// myDB.db["foo"] = "baz"
console.log(myDB.get("foo"));
const saved = myDB.saveToString(); // froze the state
myDB.set("foo", 23);
console.log(myDB.get("foo"));

// memeber visibility:
/**
 * private: only this class can see it
 * protected: this class and only its descendents can change it
 * public: free for all
 */

// Example of two db objects completely independent of
// each other

const myDB2 = new PersistentMemoryDB<number, string>();
myDB2.restoreFromString(saved); // restore from line: 42
console.log(myDB2.get("foo"));
