const key = 'AcxRPOkIA6DQnkgDyse74wVhtMO6EZ8s';


async function getLocationId(city) {
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';

    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0].Key;
}

async function getWeatherDetails(id) {
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';

    const query = `${id}/?apikey=${key}`

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

}
