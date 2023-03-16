const anotherFunction = (myCase) => {
  return new Promise((resolve, reject) => {
    if (myCase) {
      resolve('Success!!')
    } else {
      reject('Failure!!')
    }
  })
}

anotherFunction(true)
 .then(response => console.log(response))
 .catch(err => console.log(err));

anotherFunction(false)
 .then(response => console.log(response)) 
 .catch(err => console.log(err));
