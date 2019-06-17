const Money = require("../Money");
const Dollar = require("../Dollar");
const Franc = require("../Franc");

test("test multiplication", () => {
  const five = new Money(5, "USD");

  expect(new Dollar(10).amount).toStrictEqual(five.times(2).amount);
  expect(new Dollar(15).amount).toStrictEqual(five.times(3).amount);
});

test("test equality", () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
  expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  expect(new Dollar(5).equals(new Franc(6))).toBe(false);
  expect(new Dollar(5).equals(new Franc(5))).toBe(false);
});
