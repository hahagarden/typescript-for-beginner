interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
} //interface is not compiled into JS, it reduces file size.

class Player implements User {
  constructor(
    public firstName: string, //cannot use private, protected protection-level.
    public lastName: string
  ) {}
  sayHi(name: string) {
    return `Hi ${name}, I am ${this.firstName} ${this.lastName}`;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
