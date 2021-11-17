import domCreator from "./domCreator";
import Weatherfetcher from "./fetch";
import resultsPage from "./results";
import searchPage from "./search";
import unitHandler from "./unitsHandler";

const main = (() => {
  const root = document.getElementById('content');
  const search = searchPage(domCreator, root);
  const results = resultsPage(domCreator, root);
  const apiCaller = Weatherfetcher();
  const unitHandlerObj = unitHandler;
  let data, listItems, weather, windSpeed;
  
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

  const setInnerHTML = (nodeList, text) => {
    for ( let node of nodeList ) {
      let index = +node.dataset.id;
      node.innerHTML = text[index].join(': ');
    }
    listItems = text;
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
      description: 'Forecast for today is',
      speed: 'Wind speed'
    }

    let entries = []
    for (let [label, value] of Object.entries(obj)) {
      const newLabel = newLables[label];
      entries.push([newLabel, value]);
    }
    console.log('entries', entries)
    return entries;
  }

  const toggleUnits = (e) => {
    const convert = { c: unitHandlerObj.toCelsius, f: unitHandlerObj.toFahrenheit };
    const toUnit = e.target.id;
    const temperatureValues = listItems.splice(0, 4);
    const convertedValues = convert[toUnit](temperatureValues);
    const listChildren = dataListChildren();
    let listText = convertedValues.concat(listItems);
    setInnerHTML(listChildren, listText);
  }

  const setDataValues = () => {
    let temperature = data.temperature;
    let weather = data.weather;
    let wind = data.wind;
    weather = labeledValues(weather);
    windSpeed = labeledValues(wind);
    listItems = labeledValues(temperature);
  }

  const makeCall = async() => {
    let query = grabInnerHTML();
    try {
      data = await apiCaller.fetchHandler(query);
      if (data.message) throw data; // Throw it out the window...
    } catch (error) {
      return alert(error)
    }
    run(results);
    setDataValues();
  }

  const run = (page = search) => {
    let callback = page === search ? makeCall : toggleUnits;
    callDraw(page);
    setInteractiveEvent(page, callback);
  }

  return { run }

})();

main.run()