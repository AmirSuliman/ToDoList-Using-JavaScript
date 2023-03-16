function callback(x){
  return x >= 0;
}

function removeNeg(myArray, funAsArg){
  let newArray = [];
  for(const i of myArray){
    if (funAsArg(i)){
      newArray.push(i);
    }
  }
  return newArray;
}

const myNumbers = [3, -4, 4, 1, -20, -7, 5, 9, -6];
console.log(removeNeg(myNumbers, callback));