'use strict';

// Objects
// One of the JavaScript's data types.
// A collection of related data and/or functionality.
// Nearly all objects in JS are instances of Object.

// 1. Literals and properties
const obj1 = {};            // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const chan = {name: 'chan', age: 4};
print(chan);

// JS can add properties later
// JS magic (dynamically typed language) not good
chan.hasJob = true;
console.log(chan.hasJob);

delete(chan.hasJob);
console.log(chan.hasJob);

// 2. Computed properties
// Key should be always string
console.log(chan.name);     // chan
console.log(chan['name']);  // chan

function printValue(obj, key) {
    console.log(obj[key]);
}

printValue(chan, 'name');
printValue(chan, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = new Person('chan', 4);
console.log(person3);

// 4. Constructor Function
// This is how JS created an object before class was introduced
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 5. In operator: Property existence check (key in obj)
console.log('name' in chan);        // true
console.log('random' in chan);      // false
console.log(chan.random);           // undefined

// 6. for..in vs for..of
// for (key in obj)
for (let key in chan) {
    console.log(key);
}

// for (value of iterable)
const array = [1,2,3,4,5];
for (let val of array) {
    console.log(val);
}

// 7. Cloning
// Object.assign (dest, [obj1, obj2, obj3...])
const user = { name: 'chan', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user.name); // 'coder'

// old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);       // blue
console.log(mixed.size);        // big