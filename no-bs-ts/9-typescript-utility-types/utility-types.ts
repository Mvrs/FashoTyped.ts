interface MyUser {
  name: string;
  id: number;
  email?: string;
  phone?: string;
}

// it transforms every field of MyUser
// and makes it optional
type MyUserOptionals = Partial<MyUser>;

// interface MyUserOptionals {
//   name?: string;
//   id?: string;
//   email?: string;
// }

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: "Marlon",
      id: 2,
      email: "dontemail@dontemail.com",
    },
    {
      email: "marlon@fullcourt.io",
    },
  ),
);

// makes of the fields of type MyUser required
type RequiredMyUser = Required<MyUser>;

type JustEmailAndName = Pick<MyUser, "email" | "name">;

type UserWihtoutID = Omit<MyUser, "id">;

// Record<MyUser["id"]: everytime the type of id changes the Record is gonna
// change along with it
const myById = (users: MyUser[]): Record<MyUser["id"], UserWihtoutID> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v;
    return {
      ...a,
      [id]: other,
    };
  }, {});
};

console.log(
  myById([
    {
      id: 0,
      name: "Mr. Foo",
    },
    {
      id: 1,
      name: "Mrs. Baz",
    },
  ]),
);
