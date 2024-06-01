const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function kadaneAlgo(arr) {
  let maxSum = arr[0];
  let currSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currSum = currSum + arr[i];
    maxSum = Math.max(maxSum, currSum);
    if (currSum < 0) {
      currSum = 0;
    }
  }
  console.log(maxSum);
}

kadaneAlgo(array);
