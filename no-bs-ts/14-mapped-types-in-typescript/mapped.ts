// type MyFlexibleDogInfo = {
//   name: string
// } & Record<string, string> // this will give a dog info obj
// // flexible set of fields

type MyFlexibleDogInfo = {
  name: string;
  [key: string]: string | number;
};

const dog: MyFlexibleDogInfo = {
  name: "LG",
  breed: "Mutt",
};

interface DogInfo {
  name: string;
  age: number;
}

// this is going to set property from
// that original type

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type DogInfoOptions = OptionsFlags<DogInfo>;

type Listeners<Type> = {
  // template literals
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
    newValue: Type[Property],
  ) => void;
} &
  {
    [Property in keyof Type as `on${Capitalize<
      string & Property
    >}Delete`]?: () => void;
  };

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
  throw "Needs to be implemented";
}

const lg: DogInfo = {
  name: "LG",
  age: 13,
};

type DogInfoListeners = Listeners<DogInfo>;

listenToObject(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
  onAgeDelete: () => {},
  onNameDelete: () => {},
});
