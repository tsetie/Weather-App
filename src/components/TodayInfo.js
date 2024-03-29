import React from "react";
import { useState, useEffect } from "react";
import { Typography, Card, Stack, Grid } from "@mui/material";

function TodayInfo1({ zipcode, units, coords }) {
  const [todayWeather, setTodayWeather] = useState({});
  // Default get request for weather (Lowell)
  useEffect(() => {
    getTodayWeather(zipcode);
  }, []);

  // Get request for new zipcode
  useEffect(() => {
    if (zipcode) {
      getTodayWeather();
    } else {
      getTodayWeatherWithGeolocation();
    }
  }, [zipcode, units]);

  function getTodayWeather() {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast/daily?zip=" +
        zipcode +
        "&appid=fcc51394a211b5d91ede128ba9c971e5&units=" +
        units +
        "&cnt=7"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data["cod"] != "404") {
          setTodayWeather(data);
        }
      })
      .catch((err) => {
        // console.log(err.message);
      });
  }
  function getTodayWeatherWithGeolocation() {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast/daily?lat=" +
        coords.latitude +
        "57&lon=" +
        coords.longitude +
        "&appid=fcc51394a211b5d91ede128ba9c971e5&units=" +
        units
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodayWeather(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return (
    <>
      {Object.values(todayWeather).length === 0 ? null : (
        <Stack
          alignItems="center"
          justifyContent="center"
          m="1em"
          width="90%"
          height="90%"
        >
          <Typography variant="h3" color="white">
            {todayWeather["city"]["name"]}
          </Typography>
          <Stack direction="row" alignItems="center">
            <Typography variant="h8" color="#B1B2B5">
              {todayWeather["list"][0]["weather"][0]["main"]}
            </Typography>
            <img
              src={`https://openweathermap.org/img/wn/${todayWeather["list"][0]["weather"][0]["icon"]}.png`}
            ></img>
          </Stack>

          <Typography variant="h2" color="white" fontWeight="bold">
            {Math.round(todayWeather["list"][0]["temp"]["day"])}&#176;
          </Typography>
          <Stack direction="row" spacing="1.5em">
            <Typography variant="h8" color="#B1B2B5">
              L: {Math.round(todayWeather["list"][0]["temp"]["min"])}
              &#176;
            </Typography>
            <Typography variant="h8" color="#B1B2B5">
              H: {Math.round(todayWeather["list"][0]["temp"]["max"])}
              &#176;
            </Typography>
          </Stack>
        </Stack>
      )}
    </>
  );
}
export default TodayInfo1;
