abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickName: string
  ) {}
}

class Player extends User {}

const nico = new Player("Nico", "las", "니꼬");
const garden = new User("haha", "garden", "정원"); //abtract class 상속받을 수만 있는 클래스, 직접 인스턴스 생성 불가

nico.nickName = "라스";
console.log(nico);
