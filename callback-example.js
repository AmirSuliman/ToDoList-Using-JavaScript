const message = function () {
  console.log('hey, how are yor!');
}

function callback(myCallback,x,y) {
  console.log('Hi, from callback!');
  myCallback();
  x = 8;
  y = 'amir'
  console.log(typeof myCallback);
  console.log(typeof y);
  console.log(typeof x);
}

callback(message);