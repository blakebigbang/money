const Dollar = require("../index");

test("test multiplication", () => {
  const five = new Dollar(5);

  five.times(2);

  expect(10, five.amount);
});
