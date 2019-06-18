const Money = require("./Money");
const Pair = require("./Pair");

class Bank {
  constructor() {
    // TODO: implement HashTable
    this.rates = [];
  }

  reduce(source, to) {
    return source.reduce(to, Money, this);
  }

  addRate(from, to, rate) {
    this.rates.push({ pair: new Pair(from, to), rate });
  }

  rate(from, to) {
    const ratePair = new Pair(from, to);

    const rateIndex = this.rates.findIndex(rateObj => {
      return rateObj.pair.equals(ratePair);
    });

    return rateIndex > -1 && this.rates[rateIndex].rate;
  }
}

module.exports = Bank;
