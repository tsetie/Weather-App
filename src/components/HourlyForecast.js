import React from "react";
import { useState, useEffect } from "react";
import { Typography, Card, Stack, Grid, Box } from "@mui/material";
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
  return (
    <>
      <Card
        sx={{
          backgroundColor: "#56637B",
          borderRadius: "2.5em",
          p: "2em",
          m: "1em",
          overflow: "auto",
        }}
      >
        <Typography color="#B1B2B5" fontWeight="bold" mb="1em">
          HOURLY FORECAST
        </Typography>

        <Stack direction="row">
          {hourlyTemp
            ? hourlyTemp.map((temp, i) => (
                <Stack alignItems="center">
                  <Typography variant="h7" color="#B1B2B5" fontWeight="bold">
                    {new Date(temp["dt"] * 1000).toLocaleTimeString("en-US", {
                      timeStyle: "short",
                    })}
                  </Typography>
                  <Box
                    component="img"
                    src={`https://openweathermap.org/img/wn/${temp["weather"][0]["icon"]}@2x.png`}
                  ></Box>
                  <Typography variant="h6" color="#FFF" fontWeight="bold">
                    {Math.round(temp["main"]["temp"])}&#176;
                  </Typography>
                </Stack>
              ))
            : null}
        </Stack>
      </Card>
    </>
  );
}
export default HourlyForecast1;
