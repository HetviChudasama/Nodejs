// =============================
// ✅ Node.js Learning & Revision
// =============================

console.log("Node js Learning");

// =============================
// ✅ Interview Concepts
// =============================

// 👉 What is Node.js?
// Node.js is a runtime environment to run JavaScript outside of the browser.
// Example: Simple HTTP Server
const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello from Node.js!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

// 👉 Conditions
let num = 10;
if (num > 0) {
  console.log("Positive number");
} else if (num === 0) {
  console.log("Zero");
} else {
  console.log("Negative number");
}

// 👉 Loops
// For loop
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

// While loop
let i = 0;
while (i < 3) {
  console.log("i is", i);
  i++;
}

// 👉 Arrays
const fruits = ["Apple", "Banana", "Orange"];
fruits.forEach((fruit) => {
  console.log("Fruit:", fruit);
});

// Array methods
const numbers = [1, 2, 3, 4];
console.log("Length:", numbers.length);
console.log("Includes 3?", numbers.includes(3));
numbers.push(5);
console.log("After push:", numbers);
numbers.pop();
console.log("After pop:", numbers);

// 👉 Importing functions/variables from another file
const { add, PI } = require('./mathUtils');
console.log("Addition (2 + 3):", add(2, 3));
console.log("Value of PI:", PI);

// =============================
// ✅ Common Interview Questions (in comments)
// =============================

// Q1: What is Node.js?
// Ans: Node.js is a JavaScript runtime built on Chrome's V8 engine.

// Q2: What is a callback function?
// Ans: A function passed as an argument to another function.
// Example: fs.readFile('file.txt', callback)

// Q3: What is require?
// Ans: It is used to import external or local modules.

// Q4: Difference between require and import?
// Ans: require is used in CommonJS (default in Node.js), import is used in ES Modules (ES6).

// Q5: What is module.exports?
// Ans: It is used to export functions, objects, or values from a module.

// Q6: What are core modules in Node.js?
// Ans: Built-in modules like http, fs, path, etc.

// Q7: What is the event loop?
// Ans: It is the mechanism that handles async operations in Node.js.

// Q8: What is NPM?
// Ans: Node Package Manager, used to install packages: npm install express
