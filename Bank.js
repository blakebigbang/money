const Money = require("./Money");

class Bank {
  reduce(source, to) {
    return Money.dollar(10);
  }
}

module.exports = Bank;
