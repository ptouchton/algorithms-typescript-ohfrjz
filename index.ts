const computeFactorial = (num: number) => {
  
  if (num = 1) {
    console.log('hit base value')
    return 1;
  }else {
    console.log(`returning ${num} * computeFactorial(${num-1})`)
    let result = num * computeFactorial(num -1);
    return result;
  }

}


let res: number = computeFactorial(5);
console.log(res);