const capitalize = require("./capitalize");
test("capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("hello world")).toBe("Hello world");
  expect(capitalize("")).toBe("");
  expect(capitalize("a")).toBe("A");
  expect(capitalize("A")).toBe("A");
  expect(capitalize("1")).toBe("1");
  expect(capitalize("123")).toBe("123");
});
