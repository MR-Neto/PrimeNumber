const fs = require("fs");


const text = fs.readFileSync("./primes10000.txt").toString('utf-8');;
const array = text.split("\n")

const cleanPrimes = array.reduce((acc, cur) => {
  return acc.concat(cur.trimRight().substr(cur.indexOf(' ') + 1).split(' '));
}, [])

console.log(cleanPrimes);



