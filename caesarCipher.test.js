const caesarCipher = require("./caesarCipher");

test("caesarCipher", () => expect(caesarCipher).toBeDefined());

test("caesarCipher", () => {
  expect(caesarCipher("A", -2)).toBe("Y");
  expect(caesarCipher("hello", 5)).toBe("mjqqt");
  expect(caesarCipher("hello world")).toBe("hello world");
  expect(caesarCipher("z", 1)).toBe("a");
});
