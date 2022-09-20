type Player = {
  readonly name: string;
  age?: number;
};

const player: { name: string; age?: number } = { name: "garden" };
const playerTuple: [string, number, boolean] = ["Nico", 12, true];
const numbers: any[] = [1, 2, 3];
const booleans: any = true;
console.log(numbers + booleans);

function playerMaker(name: string): Player {
  return { name };
}

const nico = playerMaker("Nico");
nico.age = 12;
nico.name = "Nicolas";

let data: unknown; // type unknown
if (typeof data === "string") console.log(data);
if (typeof data === "number") console.log(data + 1);

function thisIsVoid() {
  //type void
  console.log("my type");
}

function hello(): never {
  throw new Error("xxx");
} // return 하지 않고 error 발생시킬 때
