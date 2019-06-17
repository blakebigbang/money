class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  dollar(amount) {
    return new Money(amount, "USD");
  }

  franc(amount) {
    return new Money(amount, "FRA");
  }

  equals(object) {
    return this.amount === object.amount && object.currency === this.currency;
  }

  times(multiplier) {
    return new Money(this.amount * multiplier, this.currency);
  }
}

module.exports = Money;
