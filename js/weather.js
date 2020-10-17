const API_key = 'QvWzrk2OZFBAHjI99aPGGXmMsjRCd0Dh';

// Get weather information
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${API_key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

// Get city information
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${API_key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};