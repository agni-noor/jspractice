var passed = 3;
//Functions with preserved data
var addTo = function (passed) {
  var add = function (inner) {
    return passed + inner;
  };
  return add;
};

var addThree = addTo(3);
var addThree = new addTo(3);
// var addFour = addTo(4);
// console.log(addThree(1));
// console.log(addFour(1));

console.dir(addTo); //see function info in chrome, does not work in terminal with nodejs

var subtractFrom = function (passed) {
  var subtract = function (inner) {
    return passed - inner;
  };
  return subtract;
};

var subtractFromFive = subtractFrom(5);
console.log(subtractFromFive(2));
