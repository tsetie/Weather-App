import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";

function TodayInfo({ zipcode }) {
  const [todayWeather, setTodayWeather] = useState({});

  // Default get request for weather (Lowell)
  useEffect(() => {
    getTodayWeather(zipcode);
  }, []);

  // Get request for new zipcode
  useEffect(() => {
    getTodayWeather();
  }, [zipcode]);

  function getTodayWeather() {
    console.log("hey");
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast/daily?zip=" +
        zipcode +
        "&appid=0d31ac28d5b7522c7167936c3bc94907&units=imperial&cnt=7"
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
      <Box display="flex" justifyContent="center">
        {Object.values(todayWeather).length === 0 ? null : (
          <Stack p={3.5}>
            <Typography variant="h2" color="white" textAlign="center">
              {todayWeather["city"]["name"]}
            </Typography>
            <Typography
              variant="h2"
              color="white"
              textAlign="center"
              justifyContent="center"
            >
              {Math.round(todayWeather["list"][0]["temp"]["day"])}&#176;
            </Typography>
            <Stack direction="row" spacing="1.5em" justifyContent="center">
              <Typography variant="h5" color="#FFF" fontWeight="bold">
                L: {Math.round(todayWeather["list"][0]["temp"]["min"])}&#176;
              </Typography>
              <Typography variant="h5" color="#FFF" fontWeight="bold">
                H: {Math.round(todayWeather["list"][0]["temp"]["max"])}&#176;
              </Typography>
            </Stack>
          </Stack>
        )}
      </Box>
    </>
  );
}
export default TodayInfo;

//Add day and night temp and forecast (cloudy, rainy, etc)
