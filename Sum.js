class Sum {
  constructor(augend, addend) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(to, Money) {
    const amount = this.augend.amount + this.addend.amount;

    return new Money(amount, to);
  }
}

module.exports = Sum;
