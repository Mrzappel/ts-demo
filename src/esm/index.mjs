// // import { esmodule } from "./module.mjs";
// console.log(esmodule)

//默认导出时，使用此种导入方式
// import m from "./module.mjs";
// console.log(m);

//命名导出时，命名导入方式
import { word, foo as fooname } from './module.mjs'
console.log(word)
fooname()
import md5 from 'md5'
const before = 'Hello world'
const after = md5(before)
console.log(after);