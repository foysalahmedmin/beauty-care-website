String.prototype.toCapitalize = function () {
  if (!this) return "";
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

String.prototype.capitalizeFirst = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.toNormalCase = function () {
  return this.replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[-_]+/g, " ")
    .toLowerCase()
    .trim();
};

String.prototype.toKebabCase = function () {
  return this.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};

String.prototype.toSnakeCase = function () {
  return this.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
};

String.prototype.toUpperSnakeCase = function () {
  return this.replace(/([a-z])([A-Z])/g, "$1_$2").toUpperCase();
};

String.prototype.toCamelCase = function () {
  return this.replace(/[-_\s.]+(.)?/g, (_, char) =>
    char ? char.toUpperCase() : "",
  ).replace(/^(.)/, (char) => char.toLowerCase());
};

String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

String.prototype.cleanSpaces = function () {
  return this.replace(/\s+/g, " ").trim();
};

String.prototype.trimPath = function () {
  return this.replace(/^\/+|\/+$/g, "");
};

String.prototype.truncate = function (length) {
  return this.length > length ? this.slice(0, length) + "..." : this;
};

String.prototype.mask = function (visibleCount = 4) {
  const len = this.length;
  if (len <= visibleCount) return this;
  const maskedSection = "*".repeat(len - visibleCount);
  const visibleSection = this.slice(-visibleCount);
  return maskedSection + visibleSection;
};

// validations
String.prototype.isIPv4 = function () {
  const ipPattern =
    /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9])(\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9])){3}$/;
  return ipPattern.test(this.trim());
};

String.prototype.isEmail = function () {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this);
};

String.prototype.isPhoneNumber = function (countryCode) {
  const phone = this.trim();

  const patterns = {
    BD: /^(?:\+880|0)[1-9]\d{8}$/, // Bangladesh
    IN: /^(?:\+91|0)[1-9]\d{9}$/, // India
    PK: /^(?:\+92|0)[1-9]\d{9}$/, // Pakistan
    US: /^(?:\+1|1)?\d{10}$/, // United States
    UK: /^(?:\+44|0)7\d{9}$/, // United Kingdom
    AU: /^(?:\+61|0)4\d{8}$/, // Australia
    DE: /^(?:\+49|0)[1-9]\d{9}$/, // Germany
  };

  if (countryCode) {
    countryCode = countryCode.toUpperCase();
    return patterns[countryCode] ? patterns[countryCode].test(phone) : false;
  } else {
    return Object.values(patterns).some((pattern) => pattern.test(phone));
  }
};
