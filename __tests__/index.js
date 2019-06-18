const Money = require("../Money");
const Bank = require("../Bank");
const Sum = require("../Sum");

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

test("test currency", () => {
  expect(Money.dollar(1).currency).toBe("USD");
  expect(Money.franc(1).currency).toBe("CHF");
});

test("test simple addition", () => {
  // const sum = Money.dollar(5).plus(Money.dollar(5));
  // expect(sum).toStrictEqual(Money.dollar(10));

  const five = Money.dollar(5);

  const sum = five.plus(five);
  const bank = new Bank();
  const reduced = bank.reduce(sum, "USD");

  expect(Money.dollar(10)).toStrictEqual(reduced);
});

test("test plus returns sum", () => {
  const five = Money.dollar(5);

  const result = five.plus(five);

  // Sum class
  const sum = result;

  expect(five).toBe(sum.augend);
  expect(five).toBe(sum.addend);
});

test("test reduce sum", () => {
  const sum = new Sum(Money.dollar(3), Money.dollar(4));
  const bank = new Bank();
  const result = bank.reduce(sum, "USD");

  expect(result).toStrictEqual(Money.dollar(7));
});
