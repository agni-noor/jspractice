let add = (num1, num2) => num1 + num2;
let multiply = (num1, num2) => num1 * num2;

let calc = function (num1, num2, callback) {
  if (typeof callback === "function") return callback(num1, num2);
  else console.log("Pass a function");
};

let doWhatever = function (num1, num2) {
  console.log(`The two numbers are: ${num1}, ${num2}`);
  return num1;
};

console.log(calc(1, 2, add));
console.log(calc(1, 2, multiply));
console.log(calc(1, 2, doWhatever));
console.log(
  calc(2, 1, function (a, b) {
    return a - b;
  })
);
