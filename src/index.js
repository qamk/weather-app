import domCreator from "./domCreator";
import Weatherfetcher from "./fetch";
import resultsPage from "./results";
import searchPage from "./search";
import unitHandler from "./unitsHandler";
import './main.scss';

const main = (() => {
  const root = document.getElementById('content');
  const search = searchPage(domCreator, root);
  const results = resultsPage(domCreator, root);
  const apiCaller = Weatherfetcher();
  const unitHandlerObj = unitHandler;
  let data, temperatureValues, weatherDescription, windSpeed;
  
  const onClick = (element, callback) => {
    element.addEventListener('click', callback);
  }
  
  const callDraw = (page) => {
    page.drawPage(root);
  }
  
  const grabInnerHTML = () => {
    const element = document.querySelector('input');
    return element.value;
  }

  const setInnerHTML = (nodeList, text, units) => {
    for ( let node of nodeList ) {
      let index = +node.dataset.id;
      const nodeText = text[index].join(': ');
      const nodeUnits = unitHandlerObj.units(units);
      node.innerHTML = nodeText + nodeUnits;
    }
    temperatureValues = text;
  }

  const dataListChildren = () => {
    const list = document.getElementById('data_list');
    return list.childNodes;
  }
  
  const setInteractiveEvent = (page, callback) => {
    const items = page.getInteractive();
    for ( let item of items) {
      onClick(item, callback);
    }
  }

  const labeledValues = (obj) => {
    const newLables = {
      main: 'Temperature',
      min: 'Minimum Temperature',
      max: 'Maximum Temperature',
      feels: 'Feels Like',
      description: 'Today we have',
      speed: 'Wind speed'
    }

    let entries = []
    for (let [label, value] of Object.entries(obj)) {
      const newLabel = newLables[label];
      entries.push([newLabel, value]);
    }
    return entries;
  }

  const toggleDisable = (id) => {
    const unclickedId = (id === 'f') ? 'c': 'f';
    const unclickedButton = document.getElementById(unclickedId);
    const clickedButton = document.getElementById(id);
    unclickedButton.removeAttribute('disabled');
    clickedButton.disabled = true;
  }

   const populateElements = (listVals, units = 'c') => {
    const listChildren = dataListChildren();
    temperatureValues = listVals || temperatureValues;
    setInnerHTML(listChildren, temperatureValues, units);
   }

  const toggleUnits = (e) => {
    const convert = { c: unitHandlerObj.toCelsius, f: unitHandlerObj.toFahrenheit };
    const toUnit = e.target.id;
    const convertedValues = convert[toUnit](temperatureValues);
    populateElements(convertedValues, toUnit);
    toggleDisable(toUnit);
  }

  const roundObjValues = (obj) => {
    for (let [key, value] of Object.entries(obj)) {
      const roundValue = Math.round(value);
      obj[key] = roundValue;
    }
    return obj;
  }

  const setDataValues = () => {
    let temperature = data.temperature;
    let weather = data.weather;
    let wind = data.wind;
    weatherDescription = labeledValues(weather)[0];
    windSpeed = labeledValues(wind)[0];
    temperatureValues = labeledValues(roundObjValues(temperature));
  }

  const addWeatherDescription = () => {
    const weatherElement = document.getElementById('weather');
    const weatherText = weatherDescription.join(" ~ ");
    weatherElement.innerHTML = weatherText;
  }

  const makeCall = async() => {
    let query = grabInnerHTML();
    try {
      data = await apiCaller.fetchHandler(query);
      if (data.message) throw data; // Throw it out the window...
    } catch (error) {
      return console.log(error);
    }
    run(results);
    setDataValues();
    addWeatherDescription();
    populateElements();
  }

  const run = (page = search) => {
    let callback = page === search ? makeCall : toggleUnits;
    callDraw(page); // CHANGE BACK TO 'page'
    setInteractiveEvent(page, callback);
  }

  const setTitleButton = () => {
    const h1 = document.querySelector('h1');
    h1.addEventListener('click', function() {
      run(search);
    });
  }

  return { run, setTitleButton }

})();

main.setTitleButton();
main.run()