'use strict'

// Function
// - Fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name (param1, param2) { body... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, CreatePoint
// function is object in JS

function log(message) {
    console.log(message);
}

log('Hello@');
log(12345);

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}

const chan = {name: 'chan'};
changeName(chan);
console.log(chan);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`)
}
showMessage("Hi!");

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'Chan');

// 5. Local scope
let globalMessage = 'global';   // global variable
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'Im child';
    }

    // console.log(childMessage);   // Error
}

printMessage();


// 6. Return
function sum(a, b) {
    return a + b;
}

const result = sum(1, 2);
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exist
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }

    // long upgrade logic...
}

// First-class function 
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined (hoisted)
// a function expression is created when the execution reaches it.

const print = function () { // anonymous function or function print() {} <= named fucntion
    console.log('print');
};

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'hey you') {
        printYes();
    }
    else {
        printNo();
    }
}

// anonymous function
const printYes = function() {
    console.log('yes!');
};

// named function
// better debugging in dubugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');

};

randomQuiz('wrong', printYes, printNo);
randomQuiz('hey you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
};

const simplePrint2 = () => console.log('simplePrint!');
const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
    // do something here
    return a * b;
};


// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();