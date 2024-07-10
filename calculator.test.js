const calculator = require("./calculator");

test("calculator", () => expect(calculator).toBeDefined());
test("add", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(1, 0)).toBe(1);
  expect(calculator.add(0, 0)).toBe(0);
  expect(calculator.add(0, 1)).toBe(1);
  expect(calculator.add(1, -1)).toBe(0);
  expect(calculator.add(-1, 1)).toBe(0);
  expect(calculator.add(-1, -1)).toBe(-2);
});

test("subtract", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
  expect(calculator.subtract(1, 0)).toBe(1);
  expect(calculator.subtract(0, 0)).toBe(0);
  expect(calculator.subtract(0, 1)).toBe(-1);
  expect(calculator.subtract(1, -1)).toBe(2);
  expect(calculator.subtract(-1, 1)).toBe(-2);
  expect(calculator.subtract(-1, -1)).toBe(0);
});

test("multiply", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
  expect(calculator.multiply(1, 0)).toBe(0);
  expect(calculator.multiply(0, 0)).toBe(0);
  expect(calculator.multiply(0, 1)).toBe(0);
  expect(calculator.multiply(1, -1)).toBe(-1);
  expect(calculator.multiply(-1, 1)).toBe(-1);
  expect(calculator.multiply(-1, -1)).toBe(1);
});

test("divide", () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
  expect(calculator.divide(1, 0)).toBe(Infinity);
  expect(calculator.divide(0, 0)).toBe(NaN);
  expect(calculator.divide(0, 1)).toBe(0);
  expect(calculator.divide(1, -1)).toBe(-1);
  expect(calculator.divide(-1, 1)).toBe(-1);
  expect(calculator.divide(-1, -1)).toBe(1);
});
