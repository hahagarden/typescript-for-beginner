//type Alias
type Player = {
  name: string;
  age?: number;
};

//optional type, object type
const player: { name: string; age?: number } = { name: "garden" };

//argument type, function return type
function playerMaker(name: string): Player {
  return { name };
}

const nico = playerMaker("Nico");
nico.age = 12;
