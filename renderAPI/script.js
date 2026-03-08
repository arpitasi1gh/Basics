let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    let input = document.querySelector("#cityInput");
    let CITY = input.value;
    let API_KEY = "32a09b92acaf9b09442e9baca05fe7db";
    let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;
    
    fetch(API_URL)
    .then(response => {return response.json()})
    .then(data => {
        console.log(data);
        let container = document.querySelector(".renderAPI");
        let box = document.createElement("div");
        box.setAttribute("class", "box");
        let h = document.createElement("h2");
        h.textContent = data.name;
        let p = document.createElement("p");
        p.textContent = `${data.main.temp}°C \n ${data.weather[0].description}`;
        container.innerHTML = "";
        container.appendChild(box);
        box.append(h, p);
    })
    .catch(err => {
        console.log(err);
        let container = document.querySelector(".renderAPI");
        let box = document.createElement("div");
        box.setAttribute("class", "box");
        let h = document.createElement("h2");
        h.textContent = "Error fetching weather data";
        container.innerHTML = "";
        container.appendChild(box);
        box.append(h);
    });
    
});