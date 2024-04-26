//clean room
//takeout garbage
//win icecream

let cleanroom = new Promise((resolve, reject) => {
  resolve("Cleaning room");
});

let takeoutgarbage = function (message) {
  return new Promise((resolve, reject) => {
    resolve(message + " Taking out garbage");
  });
};

let winicecream = function (message) {
  return new Promise((resolve, reject) => {
    resolve(message + " Win Icecream");
  });
};

cleanroom
  .then((result) => takeoutgarbage(result))
  .then((result) => winicecream(result))
  .then((result) => console.log("finished " + result));
