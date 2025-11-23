function showweatherDetails(event) {
    // 1. Prevent the default form submission behavior (which causes a page reload)
    event.preventDefault(); 
    
    // NOTE: Replace 'YOUR_ACTUAL_API_KEY' with your real key from OpenWeatherMap
    const apiKey = '95c132dbf3d7ecbd2198668f37726f43'; 
    
    // Get the city value inside the function when the form is submitted
    const city = document.getElementById('city').value;

    // Check if city input is empty
    if (!city) {
        document.getElementById('weatherInfo').innerHTML = '<p>Please enter a city name.</p>';
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // 2. Start the fetch request
    fetch(apiUrl)
    .then(response => {
        // Check if the request was successful (HTTP status 200)
        if (!response.ok) {
            // Throw an error to be caught by the .catch block
            throw new Error(`City not found or API error: ${response.status}`);
        }
        return response.json(); // Parse the response body as JSON
    })
    .then(data => {
        // 3. Update the HTML with weather data
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    })
    .catch(error => {
        // 4. Handle any errors (network, API key, city not found)
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. ${error.message}</p>`;
    });
}

// 5. Attach the event listener to the form element
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);