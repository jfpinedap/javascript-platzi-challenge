"use strict";

function createCalculator() {
  let total = 0;
  const add = (x) => total += x;
  const subtract = (x) => total -= x;
  const multiply = (x) => total *= x;
  const divide = (x) => total /= x;
  const clear = () => total = 0;
  const getTotal = () => total;

  return {
    add,
    subtract,
    multiply,
    divide,
    clear,
    getTotal,
  };
}

const calculator = createCalculator();
calculator.add(10);
let res = calculator.subtract(-10);
console.log(res);