// Two Type of Datatype is Defined 
// 1. Primative Datatype
// 2. None Premative(Reference) Datatype

// Total Include Primitive Datatype is: String, Number, Boolean, BigInt, Symbol, Null, Undefined
// >>>> Used Memory Stake
// Total Referece Datatype: Arry(list), Objects(dict), Function
// >>>>>>> used Memory Heap
// String Datatype 

console.log('-------------string data type---------------------')

let stringValue = 'Jaysukh'

console.log(stringValue,typeof stringValue)

console.log('-------------Number data type---------------------')

let numberValue = 36

console.log(numberValue, typeof numberValue)

console.log('-------------Boolean data type---------------------')

let isLogging = true

console.log(isLogging, typeof isLogging)

console.log('-------------BigInt data type---------------------')

let bigValue = 123456n

console.log(bigValue, typeof bigValue)

console.log('-------------Null data type---------------------')

let outsideTemp = null

console.log(outsideTemp, typeof outsideTemp)

console.log('-------------undefined data type---------------------')

let my_name;

console.log(my_name, typeof my_name)


console.log('-------------Symbol data type---------------------')

let id = Symbol('123')
let another_id = Symbol('123')

console.log(id === another_id)

console.log(id, typeof id)
console.log(another_id, typeof another_id)


// Non Primative Datatype Define

console.log('-------------Non Primative Datatype---------------------')
console.log('-------------Array (List)---------------------')
// Array(list)
let details = ['apple', 'banana', 'item']
console.log(details, typeof details)

console.log('-------------Objects (dict)---------------------')

let studentDetails = {'stu_name': 'yash', 
    'std':"1 std"
}

console.log(studentDetails, typeof studentDetails)

console.log('-------------Function---------------------')

const myFunc = function(){
    console.log('Hello Wrold');
}

console.log(myFunc, typeof myFunc)

// Premitive Data type Useing store value for Stake Memory
// None Premitive Data type Useing store value for Heap Memory

// Stake Memory is copy the value Not chages Actual Value

let nameMy = 'jaysukh'
let new_name = nameMy
new_name = 'Ashok'

console.log(new_name)
console.log(nameMy)


// None Primitive Datatype: Used For Memory Store Heap :changes Main value update

let empDetails = {'name': 'ram',
    'salary':10000
}
empDetails.name = 'Darshan'

console.log(empDetails)

// this actual values is chagnes