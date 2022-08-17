import * as md5 from 'md5'
console.log(md5('hello world'))

function getFirstWord(word: string) {
  console.log(

    word.split(' ')[0]
  )
}
let a = 'hello world'
let b: string[] = []
let c: boolean[] = []
b.push('1')
// b.push(1)
c.push(false)
// c.push('false')
let d: number[] = []
d.push(1)
let e: Array<undefined> = []
e.push(undefined)
getFirstWord(a)
// getFirstWord(123)

//interface
interface Person {
  name: string,
  age?: number
}
const person: Person = {
  name: 'liudehua',
  // age: 18
}
console.log(person);
interface UserItem {
  name: string,
  age: number,
  enjoyFoods: string[],
  friendList: UserItem[]
}
const user = {
  name: 'll',
  age: 18,
  enjoyFoods: ['tomato', 'potato'],
  friendList: [
    {
      name: 'hh',
      age: 10,
      enjoyFoods: ['ss'],
      friendList: []
    }
  ]
}
interface Admin extends UserItem {
  permissionLevel: number
}
const adminUser = {
  name: 'll',
  age: 18,
  enjoyFoods: ['tomato', 'potato'],
  friendList: [
    {
      name: 'hh',
      age: 10,
      enjoyFoods: ['ss'],
      friendList: []
    }
  ],
  permissionLevel: 1
}
console.log(adminUser);
interface NewAdmin extends Omit<UserItem, 'enjoyFoods' | 'friendList'> {
  permissionLevel: number
}
const newAdminUser: NewAdmin = {
  name: 'xx',
  age: 18,
  permissionLevel: 1
}
console.log(newAdminUser);

class Animal {
  name: string
  constructor(userName: string) {
    this.name = userName
  }
  getName() {
    console.log(this.name)
  }
}
const dog: Animal = new Animal('Petter')
dog.getName()


class UserBase {
  name: string
  constructor(userName: string) {
    this.name = userName
  }
  getName() {
    console.log(this.name);

  }
}

class User extends UserBase {
  getName() {
    console.log(this.name);

  }
}
const dehua: User = new User('DeHua')
dehua.getName()

interface UserNew extends Omit<UserBase, 'getName'> {
  age: number
}
// interface UserNew extends UserBase {
//   age: number
// }
const dede: UserNew = {
  name: 'dd',
  age: 11,
}
console.log(dede);

function consoleCount(count: number | string) {
  console.log(`you count is ${count}`);

}
consoleCount(1)
consoleCount('1')

function numberAdd(a: number, b: number): number {
  return a + b
}
const sum = numberAdd(11, 3)
console.log(sum);

const numberArrow = (a: number, b: number): number => a + b
console.log(numberArrow(2, 3));

function sayHi(name: string): void {
  console.log('you name si ' + name);

}
sayHi('peter')

interface Com {
  sum: (a: number, b: number) => number
}
const cc: Com = {
  sum(a: number, b: number): number {
    return a + b
  }
}

console.log(

  cc.sum(1, 2)
);

function queryData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('data data data')
    })
  })
}
queryData().then(res => {
  console.log(res);

})

/**
 * 未使用函数重载
 */
function printName(name: string | string[]): string | string[] {
  if (Array.isArray(name)) {
    return name.map(m => `my name is ${m}`)
  }
  return `my name is ${name}`
}
// const p1 = printName('lili') as string
// const p2 = printName(['dehua', 'yifei']) as string[]
const p1 = printName('lili')
// const p2 = printName(['dehua', 'yifei']) as string[]

const p2 = <string[]>printName(['11', '22'])
const p3 = p2.join(' ')

console.log(p3);


/**
 * 函数重载
 */
// function printName(name: string): string
// function printName(name: string[]): string[]
// function printName(name: string | string[]) {
//   if (Array.isArray(name)) {
//     return name.map(m => `my name is ${m}`)
//   }
//   return `my name is ${name}`
// }
// const p1 = printName('lili')
// const p2 = printName(['dehua', 'yifei'])
// console.log(p1, p2);







































