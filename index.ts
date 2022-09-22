class Player {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickName: string
  ) {}
}

const nico = new Player("Nico", "las", "니꼬");

nico.nickName = "라스";
console.log(nico);
