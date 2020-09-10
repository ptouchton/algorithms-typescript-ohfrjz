
const makeChange = (coins: Array<number> ,amount: number): number => {

  coins.sort((a,b) => b - a);
  let res: number = 0;
  let i: number = 0;

  while(amount > 0){
   
   if (coins[i] <= amount) {
     amount -= coins[i];
     res++;
   } else{
     i++;
   }

  }

  console.log(res);
  return res;
}


makeChange([5,10,25],40);
///makeChange(35);

// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.


// coin values: 5, 10, 25



// input amount: 40 , output # of coins: 3 (25, 10, 5)

// input amount: 35, output # of coins: 2 (25, 10) 