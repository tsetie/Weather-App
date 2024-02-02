import { React, useState, useEffect } from "react";
import { Typography, Card } from "@mui/material";
function HourlyForecast1({ zipcode, units, coords, setShowAlert }) {
  const [hourlyTemp, setHourlyTemp] = useState([]);

  // Default get request for weather (Las Vegas)
  useEffect(() => {
    getHourlyWeather(zipcode);
  }, []);

  // Get request for new zipcode or units
  useEffect(() => {
    if (zipcode) {
      getHourlyWeather();
    } else {
      getHourlyWeatherWithGeolocation();
    }
  }, [zipcode, units]);

  function getHourlyWeather() {
    fetch(
      "https://pro.openweathermap.org/data/2.5/forecast/hourly?zip=" +
        zipcode +
        "&appid=fcc51394a211b5d91ede128ba9c971e5&units=" +
        units +
        "&cnt=10"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data["cod"] != "404") {
          setHourlyTemp(data["list"]);
          setShowAlert(false);
        } else {
          setShowAlert(true);
        }
      });
  }

  function getHourlyWeatherWithGeolocation() {
    fetch(
      "https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=" +
        coords.latitude +
        "&lon=" +
        coords.longitude +
        "&appid=fcc51394a211b5d91ede128ba9c971e5&units=" +
        units +
        "&cnt=10"
    )
      .then((res) => res.json())
      .then((data) => {
        setHourlyTemp(data["list"]);
        setShowAlert(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  var today = new Date();
}
export default HourlyForecast1;
