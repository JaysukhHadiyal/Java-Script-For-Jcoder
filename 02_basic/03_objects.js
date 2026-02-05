// Objects

const demoSymbol = Symbol('Demo Sym')

const jsUser = {'name': 'jaysukh',
    'sur name': 'hadiyal',
    'age': 26,
    'email':'jaysukh@gmail.com',
    [demoSymbol] : 123
}

console.log(jsUser);
console.log(jsUser.email)

console.log(jsUser['sur name'])

jsUser.myFunc = function() {
    console.log('call the my Function');
}

console.log(jsUser.myFunc)
console.log(jsUser.myFunc())
