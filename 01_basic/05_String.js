// Define a Staring

const name = 'Jaysukh'
const repocount = 10

console.log(`my name is ${name} and my repocount is ${repocount}`)

// One Addtional Way to Define a Staring

const define = new String('Yash')

console.log('the string is ----------', define)

console.log('print the lenght of name-----', define.length)

console.log('print the name in upper cash', name.toUpperCase())

console.log('print the name lower cash', name.toLowerCase())

console.log('replace the value is------', name.replace('J', 'h'));


// at()
const nameDetails = "My Name Is Jaysukh"

let index = 5

console.log(`the value of index 5 is ${index} and name details is ${nameDetails.at(index)}`);

// slice() the staring slicing

let myName = "jaysukh"

console.log(myName.slice(0,4))
console.log(myName.slice(-7,-2))

// substr()

let surname = 'Hadiyal'

console.log(surname.substr(0, surname.length))

// toLocaleLowerCase

console.log(`EN-US: ${surname.toLocaleLowerCase("en-US")}`);

console.log(`TR: ${surname.toLocaleLowerCase("tr")}`);
