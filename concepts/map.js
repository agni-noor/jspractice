const people = [
  {
    name: "Agni",
    age: 22,
    position: "intern",
  },
  {
    name: "Mrittika",
    age: 16,
    position: "student",
  },
  {
    name: "Hena",
    age: 48,
    position: "housewife",
  },
];
const getAges = (person) => person.age * 2;
const ages = people.map(getAges);

const newPeople = people.map((item) => {
  return {
    firstname: item.name.toUpperCase(),
    oldAge: item.age * 2,
  };
});
console.log(ages);
console.log(newPeople);
