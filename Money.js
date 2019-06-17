const Expression = require("./Expression");

class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  static dollar(amount) {
    return new Money(amount, "USD");
  }

  static franc(amount) {
    return new Money(amount, "CHF");
  }

  equals(object) {
    return this.amount === object.amount && object.currency === this.currency;
  }

  times(multiplier) {
    return new Money(this.amount * multiplier, this.currency);
  }

  plus(object) {
    return new Money(this.amount + object.amount, this.currency);
  }
}

module.exports = Money;
