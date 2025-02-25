function getWeather() {
    let location = document.getElementById("location").value.trim();
    if (!location) {
        alert("Please enter a location.");
        return;
    }

    fetch(`https://api.weatherapi.com/v1/current.json?key=49c0a9ab86804f3fa9b170605241812&q=${location}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("weather").innerHTML = `
                <div class="card mx-auto mt-3 p-3 shadow-sm" style="max-width: 300px; font-size: 14px;">
                    <h5 class="mb-1">${data.location.name}, ${data.location.country}</h5>
                    <p class="text-muted">${data.current.condition.text}</p>
                    <img src="https:${data.current.condition.icon}" alt="Weather Icon" style="width: 50px;">
                    <p class="mt-1">Temperature: <strong>${data.current.temp_c}°C</strong></p>
                </div>
            `;
        })
        .catch(error => {
            alert("Could not fetch weather. Check the location.");
            console.error(error);
        });
}
