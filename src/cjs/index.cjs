const { foo: foo2, bar } = require('./module.cjs')

foo2()
console.log(bar);
console.log('hello world in index');