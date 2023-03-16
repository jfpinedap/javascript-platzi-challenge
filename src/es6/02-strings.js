"use strict";

let hello = 'Hello';
let world = 'World';
let phrase = hello + ' ' + world + '!';
console.log(phrase);

// Template literals
let phrase2 = `${hello} ${world}!`;
console.log(phrase2);


// Multi-line strings
let lorem = 'This is a line \n' + 'This is another line.';
console.log(lorem);

let loremMultiLine = `This is a line
This is another line.`
console.log(loremMultiLine);