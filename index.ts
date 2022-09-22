abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    private nickName: string
  ) {}

  abstract getNickName(arg: string): void; //abtract method should have call-signature and no implementation

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName(arg: string): void {
    console.log(this.nickName); //cannot access private nickName
  }
} //should implement abstract method getNickName()

const nico = new Player("Nico", "las", "니꼬");
nico.getFullName();

nico.nickName = "라스"; //cannot access private nickName
console.log(nico);
