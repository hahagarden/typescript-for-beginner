type Print = {
  <T, M>(arr: T[], b: M): void;
}; //generics

const printArr: Print = (arr) => {
  arr.forEach((i) => console.log(i));
};

printArr([1, 2, 3, 4], "hello");
printArr([1, 2, true, false], [1, 2]);
