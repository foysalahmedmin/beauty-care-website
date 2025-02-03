Number.prototype.toCurrency = function (locale = "en-US", currency = "USD") {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    this,
  );
};

Number.prototype.isEven = function () {
  return this % 2 === 0;
};

Number.prototype.clamp = function (min, max) {
  return Math.min(Math.max(this, min), max);
};
