type Add = {
  //call signiture, overloading: multiple call signiture
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add: Add = (a, b) => {
  if (typeof b === "string") return a;
  else return a + b;
};
