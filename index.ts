type User = {
  name: string;
};
type Player = User & {}; //type inheritance
const nico: Player = {
  name: "Nico",
};

interface Pet {
  name: string;
}
interface Pet {
  //same interface Pet
  animal: string;
}
interface PlayerPet extends Pet {}
interface PlayerPet {
  //same interface PlayerPet
  age: number;
}
const bubu: PlayerPet = {
  //interfaces merged
  name: "bubu",
  animal: "dog",
  age: 2,
};
