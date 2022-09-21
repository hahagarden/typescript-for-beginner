type Print = {
  <T>(arr: T[]): void;
}; //generics

const printArr: Print = (arr) => {
  arr.forEach((i) => console.log(i));
};

printArr([1, 2, 3, 4]);
printArr([1, 2, true, false]);
