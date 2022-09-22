abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickName: string
  ) {}
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {}

const nico = new Player("Nico", "las", "니꼬");
nico.getFullName();

nico.nickName = "라스";
console.log(nico);
