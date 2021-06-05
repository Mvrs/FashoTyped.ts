// create a noSQL style simple in memory database
// and build on top of that

interface Database {
  get(id: string): string;
  set(id: string, value: string): void;
}

// persitable inteface
// means you can read and write your state from a string
interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

class InMemoryDatabase implements Database {
  protected db: Record<string, string> = {};
  get(id: string): string {
    return this.db[id];
  }
  set(id: string, value: string): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDB extends InMemoryDatabase implements Persistable {
  saveToString(): string {
    // for this to work we would need to change the db to protected
    // so that it becomes a descendent as it extends InMemoryDatabase
    return JSON.stringify(this.db); // this.db throws an error because its private
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDB = new PersistentMemoryDB();
myDB.set("foo", "bar");
// or
// myDB.db["foo"] = "baz"
console.log(myDB.get("foo"));
const saved = myDB.saveToString(); // froze the state
myDB.set("foo", "db1 - bar");
console.log(myDB.get("foo"));

// memeber visibility:
/**
 * private: only this class can see it
 * protected: this class and only its descendents can change it
 * public: free for all
 */

// Example of two db objects completely independent of
// each other

const myDB2 = new PersistentMemoryDB();
myDB2.restoreFromString(saved); // restore from line: 42
console.log(myDB2.get("foo"));
