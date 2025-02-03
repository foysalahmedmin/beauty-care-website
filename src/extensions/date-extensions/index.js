Date.prototype.format = function (format = "YYYY-MM-DD") {
  const yyyy = this.getFullYear();
  const mm = String(this.getMonth() + 1).padStart(2, "0");
  const dd = String(this.getDate()).padStart(2, "0");
  const hh = String(this.getHours()).padStart(2, "0");
  const min = String(this.getMinutes()).padStart(2, "0");
  const ss = String(this.getSeconds()).padStart(2, "0");

  return format
    .replace("YYYY", yyyy)
    .replace("MM", mm)
    .replace("DD", dd)
    .replace("hh", hh)
    .replace("mm", min)
    .replace("ss", ss);
};

Date.prototype.addDays = function (days) {
  const result = new Date(this);
  result.setDate(result.getDate() + days);
  return result;
};

Date.prototype.isWeekend = function () {
  const day = this.getDay();
  return day === 0 || day === 6; // 0 = Sunday, 6 = Saturday
};

Object.prototype.deepClone = function () {
  return JSON.parse(JSON.stringify(this));
};

Object.prototype.isEmpty = function () {
  return Object.keys(this).length === 0;
};
