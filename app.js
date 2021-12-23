// search input 
const searchInput = document.querySelector('.search-box')
const key = 'c1be30e331da968af6ee52587b03dce0';

searchInput.addEventListener('keyup', (e) => {

    const userText = e.target.value;
    if (userText !== '') {
        getLocation(userText)

    }
})
function getLocation(location) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&unit=metric&appid=${key}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // CET CITY 
            const city = document.querySelector('.city')
            city.innerText = `${data.name}, ${data.sys.country}`;
            // GET DATE 
            const now = new Date();
            const date = document.querySelector('.date')
            date.innerText = dateBuilder(now);
            // GET TEMP 
            // note that the temp is in kelvin so i had to subtract 273.15 to convert to celsius
            const temp = document.querySelector('.temp');
            temp.innerHTML = `${Math.round(data.main.temp - 273.15)}<span>°c</span>`;
            // get WEATHER 
            const weatherEl = document.querySelector('.weather');
            weatherEl.innerText = data.weather[0].main;
            // GET HIGH AND LOW
            const hiLow = document.querySelector('.hi-low');
            hiLow.innerText = `${math.round(data.main.temp_min - 273.15)}°c / ${math.round(weather.main.temp_max - 273.15)}°c`;

        })
        .catch(err => console.log(err));

}
function dateBuilder(d) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`
}
