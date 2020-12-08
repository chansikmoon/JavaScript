'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar (문법상으로 편리함을 추가함) over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name} says 'Hello!'`);
    }
}

const Chan = new Person('Chan', 21);
console.log(Chan.name);
console.log(Chan.age);
Chan.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // getter를 정의하는 순간 this.age (memory에 올라가있는 데이터)를 읽어오는게 아니라
    // getter를 call한다
    get age() {
        // return this.age;
        return this._age;
    }

    // value를 assign할때 setter가 있다면 memory에 바로 할당하는것이 아니라 setter를 호출한다.
    // 그래서 set age(value) 안에 있는 = value가 또 setter를 call하기때문에 stack overflow가 생긴다.
    set age(value) {
        // this.age = value;
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age); // age: -1 does not make any sense

// 3. Fields (public, private)
// Too soon to use private. Many browsers don't support this.
class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);   

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// A way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {

}

class Triangle extends Shape {
    draw() {
        // super. calls parent's method
        super.draw();
        console.log('🔺');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Triangle: Color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'blue');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);        // true
console.log(triangle instanceof Rectangle);         // false
console.log(triangle instanceof Triangle);          // true
console.log(triangle instanceof Shape);             // true
console.log(triangle instanceof Object);            // true
console.log(triangle.toString());