type Last = {
  (arr: number[]): number;
};
type Prepend = {
  (arr: number[], item: number): number[];
};

const list: Last = (arr) => {
  return arr[arr.length - 1];
};
const prepend: Prepend = (arr, item) => {
  arr.unshift(item);
  return arr;
};

let myArr = [1, 2, 3, 4];
console.log(list(myArr));
console.log(prepend(myArr, 0));
