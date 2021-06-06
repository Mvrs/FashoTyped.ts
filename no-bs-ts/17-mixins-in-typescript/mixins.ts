function myLogFunction() {
  return (str: string) => {
    console.log(str);
  };
}

const logger = myLogFunction();
logger("your string");

// function creating a class
function createLoggerClass() {
  return class MyLoggerClass {
    private completeLog: string = "";
    log(str: string) {
      console.log(str);
      // add string to complete log
      this.completeLog += str + "\n";
    }
    dumpLog() {
      return this.completeLog;
    }
  };
}

const MyLogger = createLoggerClass();
const logger2 = new MyLogger();
logger2.log("Foo");
console.log(logger2.dumpLog());

// functions creating a generic class
function CreateSimpleMemoryDatabase<T>() {
  return class SimpleMemoryDatabase {
    private db: Record<string, T> = {};

    set(id: string, value: T) {
      this.db[id] = value;
    }
    get(id: string): T {
      return this.db[id];
    }
    getObject(): object {
      return this.db;
    }
  };
}

const StringDatabase = CreateSimpleMemoryDatabase<string>();

const sbd1 = new StringDatabase();
sbd1.set("a", "hello");

// T => output or result of that new (this) object created
type Constructor<T> = new (...args: any[]) => T;

// get object result and dump in console

function Dumpable<
  T extends Constructor<{
    getObject(): object;
  }>,
>(Base: T) {
  return class Dumpable extends Base {
    dump() {
      console.log(this.getObject());
    }
  };
}

const DumpableStringDatabse = Dumpable(StringDatabase);
const sbd2 = new DumpableStringDatabse();
sbd2.set("marlon", "hello marlon");
sbd2.dump();
