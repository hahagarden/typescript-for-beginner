type Player = {
  readonly name: string; //readonly
  age?: number;
};

const player: { name: string; age?: number } = { name: "garden" };
const playerTuple: [string, number, boolean] = ["Nico", 12, true];
const numbers: any[] = [1, 2, 3];
const booleans: any = true;
console.log(numbers + booleans); //any, occur no error

function playerMaker(name: string): Player {
  return { name };
}

const nico = playerMaker("Nico");
nico.age = 12;
nico.name = "Nicolas"; //readonly error
