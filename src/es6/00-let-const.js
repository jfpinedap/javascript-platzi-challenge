"use strict";

var lastName = 'Dany';
lastName = 'David';
console.log(lastName);

let fruit = 'Apple';
fruit = 'kiwi';
console.log(fruit);

const animal = 'Lion';
animal = 'Whale'; // const can't be modified
console.log(animal);

const fruits = () => {
  if (true) {
    var fruit1 = 'Apple';
    let fruit2 = 'Kiwi';
    const fruit3 = 'Banana';
  }
  console.log(fruit1); // function scope
  console.log(fruit2); // block scope
  console.log(fruit3); // block scope
}

fruits();
