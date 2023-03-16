"use strict";

function newUser(name, age, country) {
  var name = name || 'David';
  var age = age || 33;
  var country = country || 'CO';
  console.log(`name: ${name}, age: ${age}, country: ${country}`)
}

newUser();
newUser('Joe', 29, 'MX');


function newAdmin(name = 'Jimmy', age = 33, country = 'FR') {
  console.log(`name: ${name}, age: ${age}, country: ${country}`)
}

newAdmin();
newAdmin('Juan', 29, 'CO');