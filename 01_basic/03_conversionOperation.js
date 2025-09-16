// conversion Operation 

let Score = 33;
let FloatNumber = 50.55
console.log(FloatNumber);
console.log(typeof FloatNumber);

// convert Number to String
console.log('------------Number To String Convert-------------------------');

let numberString = String(Score);
console.log(numberString);
console.log(typeof (numberString));

// String To Convert Number
console.log('------------String To Convert Number-------------------------');

let strValue = '123abc'
console.log('the strvalue is', strValue);
console.log('check type', typeof strValue);

let numberValue = Number(strValue);
// value is converted in number but value is NaN(this NaN type is Number***)
console.log('check type', typeof numberValue);   
console.log(numberValue);

// Boolean Conversion
console.log('------------Boolean Conversion-------------------------');

let isLogging = 1;
console.log(isLogging);
console.log('check type', typeof isLogging)

let convertboolean = Boolean(isLogging);
console.log(convertboolean);
console.log('check type', typeof convertboolean)



// **********************Operators**************************
console.log('------------Operators-------------------------');
console.log('**********basic********');
console.log('Two Number 1 + 2 Add =>', 1 + 2);
console.log('Two Number 20 - 10 Sub =>', 20 - 10);
console.log('Two Number 5 * 3 Mul =>', 5 * 3);
console.log('Two Number 15 / 3 Div =>', 15 / 3);

