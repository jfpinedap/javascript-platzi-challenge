"use strict";

// enhance object literals
function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    id: uId,
  };
}

let user = newUser('Joe', 33, 'CO', 11);
console.log(user);
