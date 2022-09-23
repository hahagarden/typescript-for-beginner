type Health = number;
type Nickname = string;
type Team = "red" | "blue" | "green";
type Friends = Array<string>;
interface Player {
  name: string;
  age: number;
  health: Health;
  nickname: Nickname;
  team: Team;
  friends: Friends;
} //interface. almost same as type, but it is only for shaping 'object'

const nico: Player = {
  name: "Nico",
  age: 20,
  health: 100,
  nickname: "니꼬",
  team: "green",
  friends: ["haha", "garden"],
};
