const fs = require("fs");


const text = fs.readFileSync("./primes10000.txt").toString('utf-8');;
const array = text.split("\n")

const cleanPrimes = array.reduce((acc, cur) => {
  return acc.concat(cur.trimRight().substr(cur.indexOf(' ') + 1).split(' '));
}, [])


const firstPrimeNumber = (inputNumber) => {

  if (!inputNumber || inputNumber.toString().length!==3) {
    return "WRONG INPUT";
  }

  for (let checkNumber of cleanPrimes) {
    const sizeCheck = checkNumber.length >= inputNumber.length;

    const firstNumberIndex = checkNumber.indexOf(inputNumber.toString().charAt(0));
    const secondNumberIndex = checkNumber.substr(firstNumberIndex+1).indexOf(inputNumber.toString().charAt(1))+firstNumberIndex+1;
    const thirdNumberIndex = checkNumber.substr(secondNumberIndex+1).indexOf(inputNumber.toString().charAt(2))+secondNumberIndex+1;

    if (sizeCheck && firstNumberIndex != -1 && firstNumberIndex < secondNumberIndex && secondNumberIndex != -1 && secondNumberIndex < thirdNumberIndex) {
      return checkNumber;
    }
  }
  return false;
}


// console.log(firstPrimeNumber());
// console.log(firstPrimeNumber(2));
// console.log(firstPrimeNumber(232));
// console.log(firstPrimeNumber(''));
// console.log(firstPrimeNumber('23'));
// console.log(firstPrimeNumber('kjl'));



module.exports=firstPrimeNumber;