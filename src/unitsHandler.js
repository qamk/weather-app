const unitHandler = (() => {
  const toCelsius = (args) => {
    let converted = [];
    for (let temp of args) {
      temp[1] = Math.round((temp[1] - 32) * (5 / 9));
      converted.push(temp);
    }
    return converted;
  }

  const toFahrenheit = (args) => {
    let converted = [];
    for (let temp of args) {
      temp[1] = Math.round((+temp[1] * (9 / 5)) + 32);
      converted.push(temp);
    }
    return converted;
  }

  const units = (key) => {
    const units = { f: "&deg F", c: "&deg C", wind: 'k/h' };
    return units[key];
  }

  return { toCelsius, toFahrenheit, units }
})();

export default unitHandler;