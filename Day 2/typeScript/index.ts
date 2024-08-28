/*
tsc --init  -> to init tsconfig file
tsc filename -> compile to js
tsc -> compile all files
tsc --watch -> watch changes
ts-node filename -> compile and run

npm i -g typescript
npm i -g ts-node
 */

// data types
// number, string, boolean, array, object, null, undefined, any

let n: number = 1;
n = 10
let message: string;
// message = true;

// function sayHello(n1: number, n2: number): number {
//   return (n1 + n2)
// }
// sayHello()
// console.log(sayHello(5, 10));

// const test = function () {
//   console.log('12');
// }

// const arrow = (): void => { }

// Generic type
// const sum = <T = number, T2 = number>(n1: T, n2: T): number => {
//   const result: number = n1 + n2
//   return (result)
// }

// console.log(sum<number, boolean>(5, true));

// const user: Profile = {
//   id: '1',
//   name: 'John',
//   age: 'My age is 30',
//   gender: "male",

// }
const user1: User2 = {
  id: '2',
  name: 'Ahmed',
  age: 'My age is 30',
  gender: "male"
}
const user2: User2 = {
  id: '3',
  name: 'Dina',
  age: 'My age is 30',
  gender: "female"
}

// user.name
// type Alias
type Mix = string | number

// Literal type
type Gender = 'male' | 'female'
type User = {
  readonly id: string,
  name: string,
  age: Mix,
  gender: Gender,
  email?: string,
}

interface User2 {
  readonly id: string;
  name: string;
  age: Mix;
  gender: Gender;
  email?: string;
}

// type User{}
interface User2 {
  username?: string;
}

interface Profile extends User2 {
  image: string
}

// user.age = 10
// user.id='5'

class Car {
  constructor(protected color: string) {
    console.log('Inside Constructor');
    console.log(`Car color is ${this.color}`);
  }
  maxSpeed(speed: number): string { return (`Car Max Speed is ${speed}`) }
}

const car2: Car = new Car('Red')
console.log(car2.maxSpeed(200));

function first(val: any) {
  console.log(val);
  return function (target: any) {
    console.log("first(): called");
  };
}

@first('From Ford Class')
class Ford extends Car {
  constructor(private name: string, protected color: string) {
    super(color);
    console.log(`Car Name is ${name}`);
  }
}

const ford1: Ford = new Ford('Ford Explore', 'Black')
