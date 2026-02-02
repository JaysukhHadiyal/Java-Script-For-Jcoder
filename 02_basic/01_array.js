// Array Opertion

const number = [1,2,3,4,5];
console.log(number);

// add value in array
number.push(10)
console.log(number);

// check value in array

console.log(number.includes(4)) // return in true of false value 


// remove last value in array

number.pop()
console.log(number)

// print value in using indexing

console.log(number[0])

// print value in index

console.log(number.indexOf(5)) // value 5 is which index valilable

// splice and slice diff

const marks = [10, 20, 30, 40, 50, 60]

const mark2 = marks.slice(1,3);
console.log(mark2);
console.log("A ", marks);

const mark1 = marks.splice(0,3) // print in index value 1,2
console.log(mark1);
console.log("b ", marks);








