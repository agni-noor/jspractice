let promiseToClean = new Promise((resolve, reject) => {
  let isClean = false;
  if (isClean) {
    resolve("clean");
  } else {
    reject("not clean");
  }
});
promiseToClean
  .then((fromResolve) => {
    console.log("The room is ", fromResolve);
  })
  .catch((fromReject) => {
    console.log("The room is", fromReject);
  });
