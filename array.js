'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index positino
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);     // undefined

// 3. Looping over an array
// Print all fruits
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach(function (fruit, index) {
    console.log(fruit, index);
});

fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: 
fruits.push('peach');
console.log(fruits);    // apple, banana, peach

// pop:
fruits.pop();
fruits.pop();
console.log(fruits);    // apple

// unshift: add an item to the beginning
fruits.unshift('strawberry', 'lemon');
console.log(fruits);    // strawberry, lemon, apple

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);    // apple

// Note! shift and unshift are much slower than push and pop.
// splice: remove an item by index position
fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits);
fruits.splice(1, 2);    // apple, lemon
console.log(fruits);
fruits.splice(1, 1, 'green apple', 'watermelon');    // apple, lemon
console.log(fruits);    // apple, greena apple, watermelon

// combine two arrays
const fruits2 = ['pear', 'coconut'];
const mixedFruits = fruits.concat(fruits2);
console.log(mixedFruits);   // "apple", "green apple", "watermelon", "pear", "coconut"

// 5. searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));   // 0
console.log(fruits.indexOf('green apple'));   // 1
console.log(fruits.indexOf('coconut'));   // -1

console.clear();
fruits.push('watermelon');
console.log(fruits.indexOf('watermelon'));      // 2
console.log(fruits.lastIndexOf('watermelon'));  // 3



