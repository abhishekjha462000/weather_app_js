const form = document.querySelector('form');
const card = document.querySelector('div.card');
const time = document.querySelector('img.time');
const icon = document.querySelector('div.icon > img')
let cardDetails = document.querySelector('div.details');



form.addEventListener('submit', async function (event) {
    event.preventDefault();
    const city = form.city.value;
    form.reset();

    // get the details of city
    const id = await getLocationId(city); // get the id of the city
    const data = await getWeatherDetails(id); // get the weather details at this location id

    console.log(data);
    const {WeatherText, Temperature, IsDayTime, WeatherIcon} = data;
    const {Metric : {Value: temp}} = Temperature;
    

    // Now update the details section of the card
    cardDetails.innerHTML = `
        <h5 class="my-3">${city}</h5>
        <div class="my-3">${WeatherText}</div>
        <div class="display-4 my-4">
            <span>${temp}</span>
            <span>&deg;C</span>
        </div>
    `

    time.setAttribute('src', `https://raw.githubusercontent.com/abhishekjha462000/weather_app_js/refs/heads/main/img/${IsDayTime ? "day.svg" : "night.svg"}`);
    icon.setAttribute('src', `https://raw.githubusercontent.com/abhishekjha462000/weather_app_js/refs/heads/main/img/icons/${WeatherIcon}.svg`);

    // Now show the card
    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
});


