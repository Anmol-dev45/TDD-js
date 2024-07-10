const analyzeArray = require("./analyzeArray");

test("analyzeArray([1, 8, 3, 4, 2, 6]) should return { average: 4, min: 1, max: 8, length: 6 }", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("analyzeArray([1, 8, 3, 4, 2, 6, 10]) should return { average: 5, min: 1, max: 10, length: 7 }", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6, 10])).toEqual({
    average: 5,
    min: 1,
    max: 10,
    length: 7,
  });
});
