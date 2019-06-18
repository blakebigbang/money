class Pair {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  equals(object) {
    const pair = object;

    return this.from === pair.from && this.to === pair.to;
  }

  // hashCode() {
  //   return 0;
  // }
}

module.exports = Pair;
