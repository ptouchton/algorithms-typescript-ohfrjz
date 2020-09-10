const bubbleSort = (list: Array<number>): Array<number> => {

  //console.log(`bubble: ${list}`);
  let res: Array<number>;
  let stillStuff = true;
  
  while (stillStuff === true) {
    
    stillStuff = false; 
    
    for (let i = 0; i <= list.length; i++) {
         
      if (list[i] > list[i+1]) {
        stillStuff = true;
        let rem = list.splice(i+1, 1);
        list.splice(i,0,rem[0]);
      } 
    }

  };
  

  //console.log(list);
  return list;

}

function merge (left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }
  
  console.log(result.concat(left.slice(indexLeft)).concat(right.slice(indexRight)))
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

const mergeSort = (list: Array<number>): Array<number> => {

  if (list.length === 1) return list;

  //split the array into 2
  let arrSplit = Math.floor(list.length) / 2;
  let lArr = list.slice(0,arrSplit);
  let rArr = list.slice(arrSplit,list.length)
  lArr = mergeSort(lArr);
  rArr = mergeSort(rArr);
  
  //sort l & r
  list = merge(lArr,rArr);

  return list;

}

//[9, 2, 5, 6, 4, 3, 7, 10, 1, 8]; [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //[10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let res: Array<number> = mergeSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]);
console.log(res)

//TASK: implement mergesort!
// protip: Split the array into halves and merge them recursively 
// protip: return once we hit an array with a single item. That is a sorted array of size 1!
// protip: compare the arrays item by item and return the concatenated result
