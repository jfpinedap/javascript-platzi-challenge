"use stric";

function doTask1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Task 1'), 300);
  })
}

function doTask2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Task 2'), 300);
  })
}

function doTask3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Task 3'), 300);
  })
}


async function runCode() {
  const strings = [];
  return doTask1()
  .then(result1 => {
      strings.push(result1);
      return doTask2();
  })
  .then(result2 => {
      strings.push(result2);
      return doTask3();
  })
  .then(result3 => {
      strings.push(result3);
      return strings;
  })
}

runCode()
  .then(response => console.log("response:", response));
