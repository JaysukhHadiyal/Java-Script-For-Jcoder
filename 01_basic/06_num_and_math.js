// Num and Math

let balance = new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(4)); // to fixed used enter amount total precision

let amount = 1000000;
console.log(amount.toLocaleString('en-IN')); // amount convert to indian amount form with comma proper

// +++++++++++++++++Math++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // abs convert to the positive values
console.log(Math.round(7.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.min(105,65,5,8,4,9))
console.log(Math.max(105,65,5,8,4,9))

// Random

console.log(Math.random());

let min = 10
let max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min)


