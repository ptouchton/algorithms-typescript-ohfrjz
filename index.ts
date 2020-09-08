const computeFactorial = (num: number) => {
  let result: number = 1;

  
  for (let i = 1; i <= num; i++) {

    console.log(`result =  ${result} * ${i} (${result * i})`)

    result *= i;
  }

  return result;
}


let res: number = computeFactorial(5);
console.log(res);