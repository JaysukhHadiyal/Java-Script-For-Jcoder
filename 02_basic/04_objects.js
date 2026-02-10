// Objects Part 2

let tinederUser = {};

tinederUser.name = 'Jaysukh';
tinederUser.age = 26;
tinederUser.is_login = true;

console.log(tinederUser);

// nested object access

let regularUser = {
        full_name: {
            userfullName:'Jaysukh',
            surname:'hadiyal'
        }
    }

console.log(regularUser.full_name.surname)

// merge object 

// using assign method
const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c', 4:'d'}
const obj3 = Object.assign({}, obj1, obj2)

console.log(obj3)

// using spred object
const obj4 = {...obj1, ...obj2}

console.log(obj4)

// print key and valus object

console.log(Object.keys(tinederUser))
console.log(Object.values(tinederUser))
console.log(Object.entries(tinederUser)); // convert to key value in arry format


