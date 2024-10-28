// mathUtils.test.js

const { add, subtract, multiply, divide } =require('./mathUtils');

describe('Math Utils Functions', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-2, 3)).toBe(1);
  });

  test('subtracts two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(3, 5)).toBe(-2);
  });

  test('multiplies two numbers', () => {
    expect(multiply(4, 3)).toBe(12);
    expect(multiply(-4, 3)).toBe(-12);
  });

  test('divides two numbers', () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(-6, 3)).toBe(-2);
  });

  test('throws error when dividing by zero', () => {
    expect(() => divide(6, 0)).toThrow("Cannot divide by zero");
  });
});
