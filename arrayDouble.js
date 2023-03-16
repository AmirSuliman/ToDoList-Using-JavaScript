function arraDouble(myArray){
  let newArray = [];
  myArray.forEach(element => {
    for(let i = 0; i < 2; i++){
      newArray.push(element);
    }
  });
  console.log(newArray);
}

let realArray = ['bark', 'meow', 'haha'];
arraDouble(realArray);

