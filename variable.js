// 2.Variable   rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'chan';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this)
// var hoisting (move declaration from bottom to top)
console.log(age); // still able to use it

// has no block scope
{
    age = 4;
    var age;
}
console.log(age);

// 3. Constants     read-only
// use const whenever possible
// only user let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note
// Immutable data type: primitive types, frozen objects (i.e. object.freeze())
// mutable data types: all objects by default are mutalbe in JS
// Favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// a. primitive, single item: number, string, boolean, null, undefined, symbol
// let x = 15
// x -> 15
// b. object, box container
//    chan -> ref -- name --> chan
//                -- age  --> 15
// function, first-class function - data type 처럼 variable에 allocate 가능, parameter에 pass in, function return

const count = 17; // int
const size = 17.1; // decimal
console.log(`value: ${count}, type: ${typeof count}`);  // value: 17, type: number
console.log(`value: ${size}, type: ${typeof size}`);    // value: 17.1 type: number

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);              // Infinity
console.log(negativeInfinity);      // -Infinity
console.log(nAn);                   // NaN

// string
const char = 'c';
const string = 'string';
const hello = 'hello' + string;
console.log(`value: ${hello}, type: ${typeof hello}`);          // value: hello string, type: string
const helloString = `hi ${string}!`; // template literals (string)
console.log(`value: ${helloString}, type: ${typeof helloString}`);  // value: hi string, type: string

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);  // value: null, type: object

let x;
console.log(`value: ${x}, type: ${typeof x}`);      // value: undefined, type: undefined

// symbol, create unique identifiers for objects
// string 과 상관없이 unique한 symbol을 만들어준다.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);       // false

// 주어진 string에 맞는 symbol을 만들때
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol2);      // true
// console.log(`value: ${symbol1}, type: ${typeof symbol1}`);  // Error
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);  // value: id, type: symbol

// object, read-only, 
const chan = { name: 'chan', age: 15};
// chan을 pointer 는 const라 변경을 못하지만 .name or .age는 변경 가능
chan.age = 13;

// 5. Dynamic typing: dynamically typed language
// Variable data type은 run-time에 결정 -> 그래서 TypeScript이 개발 됐음.
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);    // value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);    // value: 1, type: number
text = '7' + 5; 
console.log(`value: ${text}, type: ${typeof text}`);    // value: 75, type: string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);    // value: 4, type: number
console.log(text.charAt(0)); // h
