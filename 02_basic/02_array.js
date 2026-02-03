// Array in Adv point

// tow array merge operation

const num1 = [1,2,3]
const num2 = [4,5,6]

// usering push mehtod

// num1.push(num2)
// console.log(num1);

// using concat method

const num_merge = num1.concat(num2)
console.log(num_merge)

// using spred value both array

const sperdArray = [...num1, ...num2];
console.log(sperdArray)

// checking array :from convert array

console.log(Array.isArray('Jaysukh'));
console.log(Array.from('jaysukh'));

// convert to array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3))
