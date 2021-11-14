const WeatherDataHandler = () => {
  let apiKey = 'appid=97aa6c26c2af40cfea026c9e196de08b';
  let uri = 'https://api.openweathermap.org/data/2.5/weather?';

  const _fetchData = async (city) => {
    let apiQuery = [city, apiKey].join('&');
    let data = await fetch(uri + apiQuery, {mode: 'cors'});
    return data.json();
  }

  const weatherDataParser = async (city) => {
    const data = await _fetchData(city);
    const error = data.cod == '404' && new Error(data.message);
    
    error && console.log(error);
    return data;
  }

  return { weatherDataParser };
}

export { grabWeatherData, weatherDataParser }