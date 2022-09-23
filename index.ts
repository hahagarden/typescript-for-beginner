abstract class User {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}

class Player extends User {
  sayHi(name: string) {
    return `Hi ${name}, I am ${this.firstName} ${this.lastName}`;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
} //abstract class is important. It forces subclasses to implement abstract methods so that they all have standard shape.
