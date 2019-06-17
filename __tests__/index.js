const Money = require("../Money");
const Dollar = require("../Dollar");
const Franc = require("../Franc");

test("test Dollar multiplication", () => {
  const five = new Dollar(5);

  expect(new Dollar(10)).toStrictEqual(five.times(2));
  expect(new Dollar(15)).toStrictEqual(five.times(3));
});

test("test Franc multiplication", () => {
  const five = new Franc(5);

  expect(new Franc(10)).toStrictEqual(five.times(2));
  expect(new Franc(15)).toStrictEqual(five.times(3));
});

test("test equality", () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
  expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
});
