"use strict";

export function myMap(array, func) {
  let result = [];
  for (let i of array){
    result.push(func(i));
  }
  return result;
}


myMap([1,2,3,4], (num) => num * 2)

myMap([
    {name: "michi", age: 2},
    {name: "firulais", age: 6}],
    (pet) => pet.name
)
