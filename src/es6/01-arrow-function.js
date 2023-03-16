"use strict";

function squareFunc(num) {
  return num ** 2;
}

const squareRowFunc = (num) => {
  return num ** 2;
}

const squareRowFuncInLine = num => num ** 2;

console.log(squareFunc(3));
console.log(squareRowFunc(4));
console.log(squareRowFuncInLine(5));
