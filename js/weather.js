const API_KEY = "185f305cee7a2b660f5d8764b67d5437";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then(reponse => reponse.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = data.name;
            city.innerText = `${data.weather[0].main} |  ${data.main.temp}°C`; 
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you!");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);