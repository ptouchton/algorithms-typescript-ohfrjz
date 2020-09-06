// Task 1: make it a closure function
const memoTimes10 = (() => {
  let cache: Object = {};

    return (n: number) => {
 
    if (!cache[n]) cache[n] = n * 10;
  
    console.log(cache)
    return cache[n];

  }

})();

console.log('~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~');
console.log('Task 2 calculated value:', memoTimes10(9));	// calculated
console.log('Task 2 cached value:', memoTimes10(9));	// cached
