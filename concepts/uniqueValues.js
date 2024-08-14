import { people } from "./data.js";

const positions = ["all", ...new Set(people.map((item) => item.position))];
console.log(positions);
