//array
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

//tuple
let tuple: [number, string, boolean] = [7, "hello", true];
let [a, b, c] = tuple; // a: number, b: string, c: boolean

//object
let o = {
    x: "foo",
    y: 12,
    z: "bar",
  };
  let { x, y } = o;
  console.log(o.x);