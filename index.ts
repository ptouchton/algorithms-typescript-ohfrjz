const bubbleSort = (list: Array<number>): Array<number> => {
  let res: Array<number>;
  
  for (let i = 0; i < list.length; i++) {

    if (list[i] > list[i+1]) {
      let rem = list.splice(i+1, 1);
      console.log(rem);
      list.splice(i,0,rem[0]);
    } 
  }

  console.log(list);
  return res;

}


let res: Array<number> = bubbleSort([7,2,9,4,3,10,5]);
console.log(res)
