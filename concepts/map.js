import { people } from "./data.js";
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
