const timesN = (() => {
  return (n: number) => {
    console.log('im in') 
    return n * 10
    }
  })();

const memoize = (cb: any) => (() => {
  let cache: Object = {};

  return (n: number) => {
 
    if (!cache[n]) cache[n] = cb(n);
  
    console.log(cache)
    return cache[n];
  }

})();

const memoTimes10 = memoize(timesN);
console.log('~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~');
console.log('Task 2 calculated value:', memoTimes10(9));	// calculated
console.log('Task 2 cached value:', memoTimes10(9));	// cached
