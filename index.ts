type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }

  add(whatWord: Word) {
    if (this.words[whatWord.term] === undefined) {
      this.words[whatWord.term] = whatWord.def;
      console.log(`${whatWord.term} is added`);
    }
  }

  getWord(whatWord: string) {
    if (this.words[whatWord] === undefined)
      console.log(`No ${whatWord} in dictionary`);
    else console.log(`${whatWord}: ${this.words[whatWord]}`);
  }

  deleteWord(whatWord: string) {
    if (this.words[whatWord] === undefined)
      console.log(`No ${whatWord} in dictionary`);
    else {
      delete this.words[whatWord];
      console.log(`${whatWord} is deleted`);
    }
  }
  updateWord(whatWord: string, newDef: string) {
    if (this.words[whatWord] === undefined)
      console.log(`No ${whatWord} in dictionary`);
    else {
      this.words[whatWord] = newDef;
      console.log(`${whatWord} is updated`);
    }
  }
  showAll() {
    console.log(this.words);
  }
  count() {
    console.log(`dictionary has ${Object.keys(this.words).length} words`);
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const dict = new Dict();
const kimchi = new Word("kimchi", "한국의 발효음식");
const mandoo = new Word(
  "mandoo",
  "고기와 야채가 갈아서 들어있는 딤섬같은 음식"
);
const pizza = new Word("pizza", "이탈리아 음식");

dict.add(kimchi);
dict.add(mandoo);
dict.getWord("kimchi");
dict.getWord("mandoo");
dict.getWord("pizza");
dict.updateWord("pizza", "부침개 양식버전");
dict.add(pizza);
dict.updateWord("pizza", "부침개 양식버전");
dict.deleteWord("kimchi");
dict.showAll();
dict.count();
