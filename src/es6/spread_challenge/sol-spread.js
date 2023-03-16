"use strict";

function solution(json1, json2) {
  let j1 = json1 || {
    name: "Mr. Michi",
    food: "Pescado",
  };
  let j2 = json2 || {
    age: 12,
    color: "Blanco",
  };
  return { ...j1, ...j2 }
}

let sol = solution({
  name: "Bigotes",
  food: "Pollito"
});
console.log(sol);