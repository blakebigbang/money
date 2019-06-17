const Dollar = require("../Dollar");

test("test multiplication", () => {
  const five = new Dollar(5);

  expect(five.times(2).amount).toBe(10);
  expect(five.times(3).amount).toBe(15);
});

test("test equality", () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
  expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
});
