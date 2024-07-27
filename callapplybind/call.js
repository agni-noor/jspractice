var obj = { num: 2 };

let addToThis = function (a, b, c) {
  return this.num + a + b + c;
};

console.log(addToThis.call(obj, 1, 2, 3));
//functionname.call(object, other parameters for the function)
