const reverseString = require("./reverseString");

test("reverseString", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("hello world")).toBe("dlrow olleh");
  expect(reverseString("")).toBe("");
  expect(reverseString("a")).toBe("a");
  expect(reverseString("A")).toBe("A");
  expect(reverseString("1")).toBe("1");
  expect(reverseString("123")).toBe("321");
});
