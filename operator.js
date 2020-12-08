// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log('chan\'s new book');

// 2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(1 ** 1);    // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);  // preIncrement: 3, counter: 3
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);  // postDecrement: 3, counter: 4
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);  // preDecrement: 3, counter: 3
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);  // postDecrement: 3, counter: 2

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);        // false
console.log(10 <= 6);       // false
console.log(10 > 6);        // true
console.log(10 >= 6);       // true

// 6. Logical operators: || && !
const value1 = false;
const value2 = 4 < 2;

// 첫번째가 true이면 다른건 계산 안한다. 그래서 가장 가벼운걸 앞에 두는게 좋다.
console.log(`or: ${value1 || value2 || check()}`);

// 첫번째가 false이면 다른건 계산 안한다.
console.log(`and: ${value1 || value2 || check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('me');
    }

    return true;
}

// negation
console.log(!value1);

// 6. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);  // true
console.log(stringFive != numberFive);  // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

const chan1 = {name: 'chan', age: 20};
const chan2 = {name: 'chan', age: 20};
const chan3 = chan1;

console.log(chan1 == chan2);        // false, different refernce
console.log(chan1 === chan2);       // false, different refernce
console.log(chan1 == chan3);        // true

console.log(0 == false);            // true
console.log(0 === false);           // false
console.log('' == false);           // true
console.log('' === false);          // false
console.log(null == undefined);     // true
console.log(null === undefined);    // false

// 8. Conditional operators: if
// if, else if, else
const name = 'df';
if (name === 'Chan') {
    console.log('Welcome Chan!');
}
else if (name === 'coder') {
    console.log('You are amazing coder');
}
else {
    console.log('Who are you?');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'Chan' ? 'Yea' : 'Who is that');

// 10. Switch
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser)
{
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is true,
// body code executes
let i = 3;
while (i > 0)
{
    console.log(`while: ${i--}`);
}

// do while loop, body code is executed first,
// then check the condition
do {
    console.log(`do while: ${i--}`);
    i;
} while (i > 0);

for (i = 3; i > 0; i--)
{
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2)
{
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
for (let i = 0; i <= 10; i++)
{
    if (i % 2 === 0)
        continue;
    
    console.log(i);
}

for (let i = 0; i <= 10; i++)
{
    if (i > 8)
        break;

    console.log(i);
}

