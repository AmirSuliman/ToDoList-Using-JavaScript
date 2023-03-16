function toUpper(myArray){
  let newArray = [];
  myArray.forEach((element) => {
    newArray.push(element.toUpperCase())
  });
  console.log(newArray);
}

let oriArray = ['amir', 'suliman','farhan','Zia', 'ashfaq','MANSOOR'];
toUpper(oriArray);



