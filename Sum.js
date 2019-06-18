class Sum {
  constructor(augend, addend) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(to, Money, bank) {
    // convert, if not identical currency, the augend
    const convertedAugend = this.augend.reduce(to, Money, bank);

    // convert, if not identical currency, the addend
    const convertedAddend = this.addend.reduce(to, Money, bank);

    const amount = convertedAugend.amount + convertedAddend.amount;

    return new Money(amount, to);
  }
}

module.exports = Sum;
