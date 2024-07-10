const caesarCipher = require("./caesarCipher");

test("caesarCipher", () => expect(caesarCipher).toBeDefined());

test("caesarCipher", () => {
  expect(caesarCipher("A", -2)).toBe("Y");
  expect(caesarCipher("hello", 5)).toBe("mjqqt");
  expect(caesarCipher("hello world")).toBe("hello world");
  expect(caesarCipher("z", 1)).toBe("a");

  expect(caesarCipher("A", -2)).not.toBe("A");
  expect(caesarCipher("Z", -90)).toBe("N");
  expect(caesarCipher("A", -65)).toBe("N");
  expect(caesarCipher("Z", -26)).toBe("Z");
  expect(caesarCipher("l", -90)).toBe("z");
});
