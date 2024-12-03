// Weather API Function (Replace with your own API call)
async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '5fc9797755cff1c987e05ba3fa2d584f';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            document.getElementById('weather-icon').style.display = 'block';
            document.getElementById('temp-div').innerHTML = `<p>${data.main.temp}°C</p>`;
            document.getElementById('weather-info').innerHTML = `<p>${data.weather[0].description}</p>`;
        } else {
            alert(data.message);
        }
    } catch (error) {
        alert('Error fetching weather data.');
    }
}

// Spark effect function
document.addEventListener('mousemove', createSpark);

function createSpark(e) {
    const sparkContainer = document.getElementById('spark-container');
    const spark = document.createElement('div');
    spark.className = 'spark';
    spark.style.left = `${e.clientX}px`;
    spark.style.top = `${e.clientY}px`;
    sparkContainer.appendChild(spark);

    setTimeout(() => {
        spark.remove();
    }, 2000); // Remove the spark after 2 seconds
}

// Snowflake effect is purely CSS-driven and does not require additional JS
