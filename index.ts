// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
export function times10(n: number): number {

  return n*10;

};

console.log('~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~');
console.log('times10 returns:', times10(9));

// Task 2: Use an object to cache the results of your times10 function. 
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

let timesTen = times10(9);
const cache: Object = {};
cache[timesTen] = true;

export function memoTimes10(n: number): void {

  if (!cache[n]){
     let res = times10(n)
     cache[res] = true;
  }

}

console.log('~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~');
console.log('Task 2 calculated value:', memoTimes10(9));	// calculated
console.log('Task 2 cached value:', memoTimes10(9));	// cached





 export function uniqSort(arr: Array<number>): Array<number> {

  const breadCrumbs: Object = {};
  let result: Array<number> = [arr[0]];

  for (let i of arr) {

    if (!breadCrumbs[arr[i]]) {

      result.push(arr[i]);
      breadCrumbs[arr[i]] = true;
    }
  }
  // console.log(breadCrumbs);
  // console.log(result);
  
  return result.sort((a,b) => a - b);

}

let ret = uniqSort([4,2,2,3,2,2,2]);
console.log(ret);