class Money {
  constructor(amount) {
    this.amount = amount;
  }

  equals(object) {
    return this.amount === object.amount;
  }
}

module.exports = Money;
