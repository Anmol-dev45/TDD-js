const analyzeArray = require("./analyzeArray");

test("analyzeArray([]) should return { average: NaN, min: undefined, max: undefined, length: 0 }", () => {
  expect(analyzeArray([])).toBeNull();
});

test("analyzeArray([1, 2, 3, 4, 5]) should return { average: 3, min: 1, max: 5, length: 5 }", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test("analyzeArray([10, 20, 30, 40, 50]) should return { average: 30, min: 10, max: 50, length: 5 }", () => {
  expect(analyzeArray([10, 20, 30, 40, 50])).toEqual({
    average: 30,
    min: 10,
    max: 50,
    length: 5,
  });
});
