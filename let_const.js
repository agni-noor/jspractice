let v = 3;
v = 6;
console.log(v);
//console.log(c);           throws reference error
const c = 5;
// c = 10;                  Throws type error
console.log(c);

const d = [1, 2];
d.push(3); //const can be modified but cannot be reassigned
// d = [1, 2, 3];           Throws type error
console.log(d);
