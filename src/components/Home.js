// export const Home=()=>{
//     return(
//         <div>
//             This is Home
//         </div>
//     )
// }
import React, { useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import './city.css';

const API_KEY = 'bd5e378503939ddaee76f12ad7a97608'; // Replace with your OpenWeather API key

export const Home = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  const renderChart = () => {
    if (weatherData && weatherData.hourly) {
      const labels = weatherData.hourly.map((data) =>
        new Date(data.dt * 1000).toLocaleTimeString('en-US', { hour: 'numeric' })
      );
      const temperatures = weatherData.hourly.map((data) => data.temp);

      const chartData = {
        labels,
        datasets: [
          {
            label: 'Temperature (°C)',
            data: temperatures,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };

      return <Line data={chartData} />;
    }
  };


  
  return (
    <div className="weather-app">
  <div className="center-container">
    <h1>Enter City Name:</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
    {weatherData && (
      <div className="weather-data">
        <h2>{weatherData.name}</h2>
        <p>Temperature: {weatherData.main.temp}°C</p>
        <p>Humidity: {weatherData.main.humidity}%</p>
        <div className="chart-container">{renderChart()}</div>
      </div>
    )}
  </div>
</div>

  );
  
};

export default Home;