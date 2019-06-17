const Money = require("../Money");

test("test multiplication", () => {
  const five = Money.dollar(5);

  expect(Money.dollar(10)).toStrictEqual(five.times(2));
  expect(Money.dollar(15)).toStrictEqual(five.times(3));
});

test("test equality", () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
  expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
  expect(Money.franc(5).equals(Money.franc(6))).toBe(false);
  expect(Money.franc(5).equals(Money.franc(6))).toBe(false);
  expect(Money.dollar(6).equals(Money.franc(6))).toBe(false);
});
