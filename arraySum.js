function arraySum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++){
    total += numbers[i];
  }
  console.log(total);

}

let numArray = [3, 5,2,6,7];
arraySum(numArray);

