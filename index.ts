type Print = {
  (arr: number[]): void;
  (arr: string[]): void;
  (arr: boolean[]): void;
  (arr: (number | boolean)[]): void;
  (arr: (string | boolean)[]): void;
  (arr: (number | string)[]): void;
}; //polymorphism(diverse structure)

const printArr: Print = (arr) => {
  arr.forEach((i) => console.log(i));
};

printArr([1, 2, 3, 4]);
printArr([1, 2, true, false]);
