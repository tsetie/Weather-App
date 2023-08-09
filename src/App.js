import * as React from 'react';
import './App.css';
import './components/LocationBar'
import LocationBar from './components/LocationBar';
import Box from '@mui/material/Box';
import TodayInfo from './components/TodayInfo';
import HourlyForecast from './components/HourlyForecast';
import WeeklyForecast from './components/WeeklyForecast';
import Stack from '@mui/material/Stack';
import Divider from "@mui/material/Divider";

function App() {
  var weatherData = {
    "city": {
    "id": 0,
    "name": "Minneapolis",
    "coord": {
    "lon": -93.2553,
    "lat": 44.8756
    },
    "country": "US",
    "population": 0,
    "timezone": -18000
    },
    "cod": "200",
    "message": 5.5172603,
    "cnt": 7,
    "list": [
    {
    "dt": 1691517600,
    "sunrise": 1691492793,
    "sunset": 1691544653,
    "temp": {
    "day": 84.49,
    "min": 61.93,
    "max": 85.55,
    "night": 72.95,
    "eve": 82.9,
    "morn": 63.21
    },
    "feels_like": {
    "day": 82.11,
    "night": 72.1,
    "eve": 82.24,
    "morn": 61.86
    },
    "pressure": 1011,
    "humidity": 27,
    "weather": [
    {
    "id": 800,
    "main": "Clear",
    "description": "sky is clear",
    "icon": "01d"
    }
    ],
    "speed": 10.92,
    "deg": 232,
    "gust": 25.97,
    "clouds": 5,
    "pop": 0
    },
    {
    "dt": 1691604000,
    "sunrise": 1691579264,
    "sunset": 1691630967,
    "temp": {
    "day": 86.13,
    "min": 63.32,
    "max": 87.94,
    "night": 68.38,
    "eve": 74.91,
    "morn": 64.42
    },
    "feels_like": {
    "day": 83.75,
    "night": 68.25,
    "eve": 74.82,
    "morn": 63.72
    },
    "pressure": 1006,
    "humidity": 29,
    "weather": [
    {
    "id": 500,
    "main": "Rain",
    "description": "light rain",
    "icon": "10d"
    }
    ],
    "speed": 10.07,
    "deg": 257,
    "gust": 25.75,
    "clouds": 77,
    "pop": 0.32,
    "rain": 0.43
    },
    {
    "dt": 1691690400,
    "sunrise": 1691665735,
    "sunset": 1691717280,
    "temp": {
    "day": 79.36,
    "min": 59.99,
    "max": 83.48,
    "night": 71.33,
    "eve": 79.63,
    "morn": 59.99
    },
    "feels_like": {
    "day": 79.36,
    "night": 69.91,
    "eve": 79.63,
    "morn": 58.84
    },
    "pressure": 1009,
    "humidity": 28,
    "weather": [
    {
    "id": 802,
    "main": "Clouds",
    "description": "scattered clouds",
    "icon": "03d"
    }
    ],
    "speed": 6.89,
    "deg": 19,
    "gust": 14.9,
    "clouds": 27,
    "pop": 0.12
    },
    {
    "dt": 1691776800,
    "sunrise": 1691752206,
    "sunset": 1691803592,
    "temp": {
    "day": 85.66,
    "min": 61.47,
    "max": 91.08,
    "night": 65.5,
    "eve": 90.3,
    "morn": 61.48
    },
    "feels_like": {
    "day": 85.05,
    "night": 66.31,
    "eve": 88.05,
    "morn": 61.23
    },
    "pressure": 1006,
    "humidity": 40,
    "weather": [
    {
    "id": 502,
    "main": "Rain",
    "description": "heavy intensity rain",
    "icon": "10d"
    }
    ],
    "speed": 14.99,
    "deg": 102,
    "gust": 27.76,
    "clouds": 25,
    "pop": 1,
    "rain": 33.83
    },
    {
    "dt": 1691863200,
    "sunrise": 1691838678,
    "sunset": 1691889903,
    "temp": {
    "day": 80.94,
    "min": 64.17,
    "max": 84.47,
    "night": 73.04,
    "eve": 80.15,
    "morn": 64.17
    },
    "feels_like": {
    "day": 80.6,
    "night": 72.39,
    "eve": 80.47,
    "morn": 64.74
    },
    "pressure": 1011,
    "humidity": 40,
    "weather": [
    {
    "id": 501,
    "main": "Rain",
    "description": "moderate rain",
    "icon": "10d"
    }
    ],
    "speed": 9.86,
    "deg": 310,
    "gust": 19.39,
    "clouds": 0,
    "pop": 1,
    "rain": 4.08
    },
    {
    "dt": 1691949600,
    "sunrise": 1691925149,
    "sunset": 1691976212,
    "temp": {
    "day": 67.21,
    "min": 63.05,
    "max": 74.1,
    "night": 63.79,
    "eve": 68.74,
    "morn": 63.05
    },
    "feels_like": {
    "day": 67.77,
    "night": 63.68,
    "eve": 69.4,
    "morn": 63.57
    },
    "pressure": 1013,
    "humidity": 88,
    "weather": [
    {
    "id": 501,
    "main": "Rain",
    "description": "moderate rain",
    "icon": "10d"
    }
    ],
    "speed": 9.53,
    "deg": 244,
    "gust": 18.72,
    "clouds": 100,
    "pop": 1,
    "rain": 13.3
    },
    {
    "dt": 1692036000,
    "sunrise": 1692011621,
    "sunset": 1692062520,
    "temp": {
    "day": 66.15,
    "min": 57.56,
    "max": 74.21,
    "night": 63.68,
    "eve": 72.16,
    "morn": 57.56
    },
    "feels_like": {
    "day": 65.43,
    "night": 62.94,
    "eve": 71.71,
    "morn": 57.29
    },
    "pressure": 1019,
    "humidity": 63,
    "weather": [
    {
    "id": 803,
    "main": "Clouds",
    "description": "broken clouds",
    "icon": "04d"
    }
    ],
    "speed": 10.47,
    "deg": 343,
    "gust": 18.97,
    "clouds": 81,
    "pop": 0
    }
    ]
    }
  return (
    <Box p={2}>
      <LocationBar/>
      <TodayInfo weatherData={weatherData}/>
      <Stack direction="row" justifyContent="space-evenly"  divider={
              <Divider orientation="vertical" variant="middle" flexItem />
            }>
        <HourlyForecast weatherData={weatherData}/>
        <WeeklyForecast weatherData={weatherData}/>
      </Stack>

    </Box>

    
  );
}

export default App;
