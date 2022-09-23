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
interface PlayerPet extends Pet {} //interface inheritance
const bubu: PlayerPet = {
  name: "bubu",
};
