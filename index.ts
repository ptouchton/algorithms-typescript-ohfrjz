// Import stylesheets
import './style.css';

 export function uniqSort(arr: Array<number>): Array<number> {

  const breadCrumbs: Object = {};
  let result: Array<number> = [arr[0]];

  for (let i of arr) {

    if (!breadCrumbs[arr[i]]) {

      result.push(arr[i]);
      breadCrumbs[arr[i]] = true;
    }
  }
  console.log(breadCrumbs);
  console.log(result);
  
  return result.sort((a,b) => a - b);

}

uniqSort([4,2,2,3,2,2,2]);