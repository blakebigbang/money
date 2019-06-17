const Money = require("./Money");

class Bank {
  reduce(source, to) {
    const sum = source;

    // Need to import and pass Money class through here instead of `Sum.js` because it will cause a circular import error, not allowing new Money instances to be created
    return sum.reduce(to, Money);
  }
}

module.exports = Bank;
