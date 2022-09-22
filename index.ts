abstract class User {
  constructor(
    private firstName: string,
    private lastName: string, //private can only be used in User class
    protected nickName: string // protected can only be used in User class and subclasses
  ) {}

  abstract getNickName(arg: string): void;

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName(arg: string): void {
    console.log(this.nickName);
  }
}

const nico = new Player("Nico", "las", "니꼬");
nico.getFullName();
