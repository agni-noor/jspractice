var passed = 3;
//Functions with preserved data
var addTo = function (passed) {
  var add = function (inner) {
    return passed + inner;
  };
  return add;
};

var addThree = addTo(3);
var addFour = addTo(4);
console.log(addThree(1));
console.log(addFour(1));

console.dir(addTo);
