function hourglassSum(arr){
  let largest = -Infinity;
  let row = 0;
  let column = 1;
  let hourglass = 16;
  while(hourglass > 0){
    if(column > 4){
      column = 1;
      row += 1;
    }
    let sum = calcSum(arr,row,column);
    if(largest < sum){
      largest = sum;
    }
    column++;
    hourglass -= 1;
  }
  return largest; 
}

function calcSum(arr, row, column){
  let sum = 0;
  let topL = arr[row][column - 1];
  let topC = arr[row][column];
  let topR = arr[row][column + 1]; 
  let center = arr[row + 1][column]; 
  let bottomL = arr[row + 2][column - 1];
  let bottomC = arr[row + 2][column]; 
  let bottomR = arr[row + 2][column + 1]
  sum = topL + topC + topR + center + bottomL + bottomC + bottomR
  // console.log('sum', sum);
  return sum;
}

hourglassSum(
  [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
  ]
)
                                                                             