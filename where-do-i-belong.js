function getIndexToIns(arr, num) {
  arr.push(num);
  arr = mergeSort(arr);

  for(let i = 0; i < arr.length; i++){
    if(arr[i] == num){
      return i;
    }
  }
  return num;
}

function mergeSort(arr){
  const half = arr.length / 2;
  const left = [];

  if(arr.length < 2){
    return arr;
  }
  for(let i = 0; i < half; i++){
    left.push(arr.pop());
  }

  return merge(mergeSort(left),mergeSort(arr));
}

function merge(left, right){
  let array = [];

  while(left.length&& right.length){
    if(left[0] < right[0]){
      array.push(left.shift());
    }else{
      array.push(right.shift());
    }
  }
  return [...array, ...left, ...right];
}

getIndexToIns([10, 20, 30, 40, 50], 35);
