function largestOfFour(arr) {
  let greatArr = [];
  let highVal = 0;
  //one dimension

  for(let i = 0; i < arr.length; i++){
    highVal = arr[i][0];
    while(arr[i].length != 0){
      if(highVal < arr[i][0]){
        highVal = arr[i].shift();
      }else{
        arr[i].shift();
      }
    }
    greatArr.push(highVal);
  }

  console.log(greatArr);
  return greatArr;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
