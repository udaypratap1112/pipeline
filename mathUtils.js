// mathUtils.js

// A function to add two numbers
 function add(a, b) {
    return a + b;
  }
  
  // A function to subtract two numbers
  function subtract(a, b) {
    return a - b;
  }
  
  // A function to multiply two numbers
 function multiply(a, b) {
    return a * b;
  }
  
  // A function to divide two numbers, with error handling for division by zero
   function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  }
  
  module.exports ={add,divide,multiply,subtract}