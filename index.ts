const bubbleSort = (list: Array<number>): Array<number> => {
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

//[9, 2, 5, 6, 4, 3, 7, 10, 1, 8]; [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //[10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let res: Array<number> = bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(res)
