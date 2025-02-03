Array.prototype.removeDuplicates = function () {
  return [...new Set(this)];
};

Array.prototype.last = function () {
  return this[this.length - 1];
};

Array.prototype.shuffle = function () {
  for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this[i], this[j]] = [this[j], this[i]];
  }
  return this;
};
