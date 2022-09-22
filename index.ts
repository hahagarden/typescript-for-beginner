type Words = {
  [y: string]: string;
}; //means property key(y) has string type

class Dict {
  private words: Words; //not immediately initialized in the constructor, initialize words manually
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    //class Word can also be type
    if (this.words[word.term] === undefined) {
      //if property do not exist, return undefined
      this.words[word.term] = word.def; //undefined property 동적 생성([프로퍼티 키 표현식] 대괄호 표기법)
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public readonly term: string, public readonly def: string) {}
}

const kimchi = new Word("kimchi", "한국음식");
const dict = new Dict();
dict.add(kimchi);
dict.def("kimchi");
