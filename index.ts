export default function add(x: number): any {
  const fn = (y: number) => add(x + y);
  fn.valueOf = () => x;
  return fn;
}
let res: number = add(1)(2)(3);
console.log(res);