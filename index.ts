
const makeChange = (amount: number): number => {

  const vals: Array<number> = [5,10,25];
  let amt: number = amount;
  let res: number = 0;

  for(let i = vals.length-1; i >= 0; i-- ){

    amt -= vals[i];
    //console.log(amt);

    res++;
    //console.log(res);
    
    console.log(`div ${amt % 5}`)
    if (amt === 0 || (amt % 5) !== 0) break;
  }

  console.log(res);
  return res;
}


makeChange(36);
///makeChange(35);

// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.


// coin values: 5, 10, 25



// input amount: 40 , output # of coins: 3 (25, 10, 5)

// input amount: 35, output # of coins: 2 (25, 10) 