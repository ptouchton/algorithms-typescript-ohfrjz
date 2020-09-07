const timesN = (() => {return (n: number) => { return n * 10}})


const memoize = (n: number, cb: any) => (() => {
  let cache: Object = {};

  return (n: number, cb: any) => {
 
    if (!cache[n]) cache[n] = cb(n);
  
    console.log(cache)
    return cache[n];
  }

})();

const memoTimes10 = memoize(9,timesN());
console.log('~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~');
console.log('Task 2 calculated value:', memoTimes10(9,timesN()));	// calculated
console.log('Task 2 cached value:', memoTimes10(9, timesN()));	// cached
