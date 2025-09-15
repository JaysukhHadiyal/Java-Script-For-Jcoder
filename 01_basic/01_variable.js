const pinCode = 1234; // integer    not changes able this varialble value
let userName = "Jaysukh"; // string  changes able this varialble value
var isLoggedIn = false; // boolean  changes able this varialble value

sur_name = "Hadiyal"; // global variable

userName = 7896;
isLoggedIn = true;

console.log(pinCode);
console.log(userName);
console.log(isLoggedIn);
console.log(sur_name);

// use case  - when we have to print multiple variable value in one line in table format 
console.table({ pinCode, userName, isLoggedIn, sur_name });
console.table({pinCode, userName});
