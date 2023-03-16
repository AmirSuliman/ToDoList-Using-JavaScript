let numbers = [1, 500000000, -2, 3, 5, 0];

// Write a function named max that takes an 
// array of numbers and returns the largest number in the array.
function max(array) {
  let max = -Infinity;
  array.filter(function (number) {
    if (number > max) {
      max = number;
    }
  });
  return max;
}
console.log(max(numbers));

// Similarly, write a function min that returns the
//  smallest number in the array.
function min(array) {
  let min = Infinity;
  array.filter(function (number) {
    if (number < min) {
      min = number;
    }
  });
  return min;
}
console.log(min(numbers));

// Write a function that returns the smallest
//  number that’s greater or equal to 0.
function smallestNonNegative(array) {
  let min = Infinity;
  array.filter(function (number) {
    if (number < 0) {
      return;
    }
    else if (number < min) {
      min = number;
    }
  });
  return min;
}
console.log(smallestNonNegative(numbers));

// Write a function pickApples that takes an array
//  of strings representing fruits and returns the array  
// with the first 2 occurrences of "apple" removed.
function pickApples(strArray) {
  let count = 0;
  let filteredArray = [];
  filteredArray = strArray.filter(function (fruit) {
    if (count >= 2) {
      return true;
    }
    else if (fruit === 'apple') {
      count++;
      return false;
    }
    else {
      return true;
    }
  });
  return filteredArray;
}
let fruitArray = ['cherry', 'apple', "orange", 'apple', 'banana', 'apple'];
console.log(pickApples(fruitArray));


// Similarly, write a function pickFruits that 
// removes 2 apples and 1 orange from the array.
function pickFruits(strArray) {
  let appleCount = 0;
  let orangeCount = 0;
  let filteredArray = [];
  filteredArray = strArray.filter(function (fruit) {
    if (fruit === 'apple') {
      if (appleCount >= 2) {
        return true;
      }
      else {
        appleCount++;
        return false;
      }
    }
    else if (fruit === 'orange') {
      if (orangeCount >= 1) {
        return true;
      }
      else {
        orangeCount++;
        return false;
      }
    }
    else {
      return true;
    }
  });
  return filteredArray;
}
console.log(pickFruits(fruitArray));

// Write a function pickLastApples similar to above that
//  removes the last 2 apples from the array. 
//  (Use Google to get the code for reversing an array.)
function pickLastApples(strArray) {
  let count = 0;
  let filteredArray = [];
  filteredArray = strArray.reverse().filter(function (fruit) {
    if (count >= 2) {
      return true;
    }
    else if (fruit === 'apple') {
      count++;
      return false;
    }
    else {
      return true;
    }
  });
  return filteredArray.reverse();
}
console.log(pickLastApples(fruitArray));




