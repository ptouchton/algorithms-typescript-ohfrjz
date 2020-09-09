const mergeSort = (list: Array<number>): Array<number> => {
  let res: Array<number>;
  
  //split the array into 2
  let arrSplit = Math.floor(list.length) / 2;
  console.log(arrSplit);
  let lArr = list.slice(0,arrSplit);
  let rArr = list.slice(arrSplit+1,list.length)
  console.log(`lArr: ${lArr} | rArr: ${rArr}`);
  
  //console.log(list);
  return list;

}

//[9, 2, 5, 6, 4, 3, 7, 10, 1, 8]; [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //[10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let res: Array<number> = mergeSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]);
console.log(res)

//TASK: implement mergesort!
// protip: Split the array into halves and merge them recursively 
// protip: return once we hit an array with a single item. That is a sorted array of size 1!
// protip: compare the arrays item by item and return the concatenated result
