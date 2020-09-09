const linearSearch = (list: Array<number>,num: number) => {
  
   for (let i of list) {
     console.log(i);
     if (i === num) {
       console.log(`found ${num}`);
       return;
     }
   } 

}


linearSearch([2,6,7,90,103], 90);
