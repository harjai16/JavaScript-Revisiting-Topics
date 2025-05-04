"use strict";




// alert("Hello World!");   works in browser but not in nodejs

// let age = 25; // number
// let name = "Ashwnani"; // string
// let isStudent = true; // boolean


// console.log(typeof age); // number
// console.log(typeof name); // string
// console.log(typeof isStudent); // boolean
// console.log(typeof null); // object (this is a known bug in JavaScript)
// console.log(typeof undefined); // undefined
// console.log(typeof Symbol("id")); // symbol (unique and immutable value)

// Data Types conversion || operations  
let score = 100; // number
// console.log(typeof score); // number

let scoreString = String(score); // convert number to string
let scoreNumber = Number(score); // convert string to number  

let test = "100abc"; // string
let testNumber = Number(test); // convert string to number
// console.log(testNumber); // NaN (Not a Number)      
// console.log(typeof testNumber); // number (but it's NaN)

// operations

let num1 = 10; 
num1++; // increment num1 by 1

console.log(num1); // 11
++num1; // increment num1 by 1



// comparison operators
let a = 10; // number
let b = "10"; // string

// console.log(a == b); // true (loose equality, checks value only)
// console.log(a === b); // false (strict equality, checks value and type)

// console.log(NaN == NaN); // false (NaN is not equal to anything, even itself)
// console.log(undefined == null); // true (loose equality, checks value only)
// console.log(undefined === null); // false (strict equality, checks value and type)
// console.log(null == 0); // false (null is not equal to anything, even 0)
// console.log(undefined == undefined); // true (undefined is equal to itself)
// console.log(null == null); // true (null is equal to itself)

// console.log(Nan >= 0); // false (NaN is not equal to anything, even 0)
// console.log(NaN <= 0); // false (NaN is not equal to anything, even 0)




const id = Symbol("123"); // unique and immutable value
const id2 = Symbol("123"); // unique and immutable value
console.log(id === id2); // false (even though they have the same description, they are different symbols)
console.log(id); // Symbol(id) (this is the default string representation of a symbol)
console.log(id2);


// Array obejct functions

let arr = [1, 2, 3, 4, 5]; // array of numbers
let myObject = { name: "Ashwnani", age: 25 }; // object with properties

const myFunction = function() { // function expression   
    console.log("Hello World!"); // function body
} // function declaration
// myFunction(); // call the function   

