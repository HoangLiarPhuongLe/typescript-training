function add(a: number, b:number):number{
    return a+b;
}
 
let sum = add(10, 20);

console.log(sum);

const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
