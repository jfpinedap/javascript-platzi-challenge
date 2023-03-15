"use strict";

function myMap(array, func) {
  let result = [];
  for (let i of array) {
    result.push(func(i));
  }
  return result;
}

let res = myMap([1, 2, 3, 4], (num) => num * 2);
console.log(res);

res = myMap([
  { name: "michi", age: 2 },
  { name: "firulais", age: 6 }],
  (pet) => pet.name
);
console.log(res);
