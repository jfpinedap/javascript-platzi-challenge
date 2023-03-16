"use strict";

// arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]); // Apple Banana

fruits = ['Apple', 'Pineapple', 'Banana'];
let [c, d] = fruits;
console.log(a, fruits[1]); // Apple Pineapple


// Object destructuring
let user = { username: 'Lucas', age: 33 };
let { username, age } = user;
console.log(username, age); // Lucas 33

let user1 = { username1: 'Lucas', age: 33, country: 'CO' };
let { username1, country } = user1;
console.log(username1, country); // Lucas CO


// spread operator
let person = { name: 'Karla', age: 41 };
let countryP = 'CO';

let data = { id: 1, ...person, countryP };
console.log(data); // { id: 1, name: 'Karla', age: 41, countryP: 'CO' }


// rest
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 2, 3, 4); // 3