let myArray = [8, 9, 0, 23, 3, 42, 3,5];
function myFunction(item, index,arry){
  arry[index] = item * 10;
}
  myArray.forEach(myFunction);
  console.log(myArray);