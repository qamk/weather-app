const Weatherfetcher = () => {
  let apiKey = 'appid=97aa6c26c2af40cfea026c9e196de08b';
  let uri = 'https://api.openweathermap.org/data/2.5/weather?';
  let dataObj;

  const _fetchData = async ([location, units]) => {
    let apiQuery = [location, units, apiKey].join('&');
    let data = await fetch(uri + apiQuery, {mode: 'cors'});
    return data.json();
  }
  
  const _summedData = () => {
    const weather = dataObj.weather[0];
    const temperature = dataObj.main;
    const wind = dataObj.wind;
    const summary = {
      weather: {
        description: weather.description,
      },
      temperature: {
        main: temperature.temp, feels: temperature.feels_like,
        max: temperature.temp_max, min: temperature.temp_min
      },
      wind: {
        speed: wind.speed
      }
    };
    
    return summary;
  }
  
  const fetchHandler = async (...locationParams) => {
    const units = 'units=metric';
    const location = 'q=' + locationParams.join(',');
    try {
      const data = await _fetchData([location, units]);
      if (data.cod == '404') { throw 'Invalid query' };
      dataObj = data;
    } catch (error) {
      console.log(data);
      return new Error(error);
    }
    return _summedData();
  }
  
  return { fetchHandler };
}

export default Weatherfetcher;