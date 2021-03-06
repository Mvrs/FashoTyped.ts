interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

const houses: House[] = [
  { name: "Atreides", planets: "Calladan" },
  { name: "Corrino", planets: ["Kaitan", "Salusa Secundus"] },
  { name: "Harkonnen", planets: ["Giedi Prime", "Arrakis"] },
];

function findHouses(houses: string): HouseWithID[];
function findHouses(
  houses: string,
  filter: (house: House) => boolean,
): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(
  houses: House[],
  filter: (house: House) => boolean,
): HouseWithID[];

function findHouses(
  houses: string | House[],
  filter?: (house: House) => boolean,
): HouseWithID[] {
  if (typeof houses === "string") {
    houses = JSON.parse(houses);
  }

  let houseWithId = [...(houses as House[])].map(house => ({
    id: houses.indexOf(house as any),
    ...house,
  }));

  console.log(houseWithId);

  if (filter) {
    houseWithId = houseWithId.filter(filter);
  }

  return houseWithId;
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides"),
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
